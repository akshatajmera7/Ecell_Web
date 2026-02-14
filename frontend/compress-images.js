/**
 * Aggressive Image Compression Script (Windows-safe)
 * Uses a temp file approach to work around Windows file locks.
 * - Resizes to max 1200px
 * - JPEG quality 70 (mozjpeg)
 * - PNG palette compression
 * - Skips images < 50KB
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets');

function getAllFiles(dirPath, arrayOfFiles = []) {
    try {
        const files = fs.readdirSync(dirPath, { withFileTypes: true });
        files.forEach(file => {
            const fullPath = path.join(dirPath, file.name);
            if (file.isDirectory()) {
                getAllFiles(fullPath, arrayOfFiles);
            } else {
                arrayOfFiles.push(fullPath);
            }
        });
    } catch (e) { }
    return arrayOfFiles;
}

const allFiles = getAllFiles(inputDir);
const images = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
});

console.log(`\n🔍 Found ${images.length} images in src/assets.`);

let processedCount = 0;
let skippedCount = 0;
let errorCount = 0;
let totalSavedBytes = 0;
let totalOriginalBytes = 0;

async function compressFile(file, retries = 3) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const stats = fs.statSync(file);
            const sizeKB = stats.size / 1024;
            if (attempt === 1) totalOriginalBytes += stats.size;

            if (sizeKB < 50) {
                skippedCount++;
                return;
            }

            const ext = path.extname(file).toLowerCase();
            const isPng = ext === '.png';

            // Read file into buffer first (avoids file lock during sharp processing)
            const inputBuffer = fs.readFileSync(file);

            let pipeline = sharp(inputBuffer, { failOn: 'none' })
                .resize(1200, 1200, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .rotate();

            if (isPng) {
                pipeline = pipeline.png({ quality: 70, palette: true, effort: 10, force: true });
            } else {
                pipeline = pipeline.jpeg({ quality: 70, mozjpeg: true, progressive: true, force: true });
            }

            const outputBuffer = await pipeline.toBuffer();

            if (outputBuffer.length < stats.size) {
                // Write to temp file first, then rename (atomic on Windows)
                const tempFile = file + '.tmp';
                fs.writeFileSync(tempFile, outputBuffer);
                try {
                    fs.unlinkSync(file);
                } catch (e) {
                    // If we can't delete original, remove temp and retry
                    fs.unlinkSync(tempFile);
                    throw e;
                }
                fs.renameSync(tempFile, file);

                const savedBytes = stats.size - outputBuffer.length;
                totalSavedBytes += savedBytes;
                const reduction = ((1 - outputBuffer.length / stats.size) * 100).toFixed(1);
                console.log(`⚡ ${path.relative(inputDir, file)} (${sizeKB.toFixed(0)}KB → ${(outputBuffer.length / 1024).toFixed(0)}KB, -${reduction}%)`);
                processedCount++;
            } else {
                skippedCount++;
            }
            return; // Success, exit retry loop
        } catch (error) {
            if (attempt < retries) {
                // Wait a bit before retry (exponential backoff)
                await new Promise(r => setTimeout(r, 500 * attempt));
            } else {
                console.error(`❌ ${path.relative(inputDir, file)}: ${error.message}`);
                errorCount++;
            }
        }
    }
}

async function processImages() {
    // Process in batches of 5 to avoid overwhelming the system
    const batchSize = 5;
    for (let i = 0; i < images.length; i += batchSize) {
        const batch = images.slice(i, i + batchSize);
        await Promise.all(batch.map(file => compressFile(file)));
    }

    console.log('\n🎉 Compression Complete!');
    console.log(`✅ Compressed: ${processedCount} files`);
    console.log(`⏭️  Skipped: ${skippedCount} files`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`💾 Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(1)} MB`);
    console.log(`📦 Original total: ${(totalOriginalBytes / 1024 / 1024).toFixed(1)} MB`);
    console.log(`📦 New total: ${((totalOriginalBytes - totalSavedBytes) / 1024 / 1024).toFixed(1)} MB`);
}

processImages();
