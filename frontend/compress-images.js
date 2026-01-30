
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets');
const backupDir = path.join(__dirname, 'src/assets_backup');

// Helper to copy directory recursively
function copyRecursiveSync(src, dest) {
    if (fs.existsSync(src)) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        const entries = fs.readdirSync(src, { withFileTypes: true });
        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);

            if (entry.isDirectory()) {
                copyRecursiveSync(srcPath, destPath);
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        }
    }
}

// 1. Create Backup
console.log('📦 Creating backup of src/assets...');
if (fs.existsSync(backupDir)) {
    console.log('Backup folder already exists. Skipping backup to avoid overwriting previous backup.');
} else {
    try {
        copyRecursiveSync(inputDir, backupDir);
        console.log('✅ Backup created at src/assets_backup');
    } catch (err) {
        console.error('❌ Backup failed:', err);
        process.exit(1);
    }
}

// 2. Recursive file walker
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file.name).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file.name, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file.name));
        }
    });

    return arrayOfFiles;
}

const allFiles = getAllFiles(inputDir);

// Filter for images
const images = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
});

console.log(`🔍 Found ${images.length} images in src/assets.`);

let processedCount = 0;
let skippedCount = 0;
let errorCount = 0;

async function processImages() {
    for (const file of images) {
        try {
            const stats = fs.statSync(file);
            const sizeKB = stats.size / 1024;

            // Skip small images (< 100KB) to prevent degradation of icons/logos
            if (sizeKB < 100) {
                skippedCount++;
                continue;
            }

            const buffer = await sharp(file)
                .resize(1920, 1920, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .jpeg({ quality: 80, mozjpeg: true, progressive: true, force: false }) // force: false keeps png as png
                .png({ quality: 80, palette: true, force: false })
                .toBuffer();

            // Check if we actually saved space
            if (buffer.length < stats.size) {
                fs.writeFileSync(file, buffer);
                const newSizeKB = buffer.length / 1024;
                const reduction = ((1 - buffer.length / stats.size) * 100).toFixed(1);

                console.log(`⚡ Compressed: ${path.relative(inputDir, file)} (${sizeKB.toFixed(1)}KB -> ${newSizeKB.toFixed(1)}KB, -${reduction}%)`);
                processedCount++;
            } else {
                // If compression made it larger (rare but possible with already optimized images), skip
                skippedCount++;
            }

        } catch (error) {
            console.error(`❌ Error compressing ${file}:`, error.message);
            errorCount++;
        }
    }

    console.log('\n🎉 Compression Complete!');
    console.log(`✅ Processed: ${processedCount}`);
    console.log(`⏭️ Skipped (small or no gain): ${skippedCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`\nNote: Backup is available at ${backupDir} if needed.`);
}

processImages();
