const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src/assets');

async function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = await getAllFiles(fullPath, arrayOfFiles);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext) && !file.toLowerCase().includes('copy')) {
                arrayOfFiles.push(fullPath);
            }
        }
    }

    return arrayOfFiles;
}

async function compressImage(filePath) {
    const tempPath = filePath + '.tmp';
    const ext = path.extname(filePath).toLowerCase();

    try {
        const stats = fs.statSync(filePath);
        const sizeBefore = (stats.size / 1024).toFixed(2);

        let pipeline = sharp(filePath)
            .resize(1920, 1920, {
                fit: 'inside',
                withoutEnlargement: true
            });

        if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, palette: true });
        } else {
            pipeline = pipeline.jpeg({ quality: 80, progressive: true });
        }

        await pipeline.toFile(tempPath);

        const statsAfter = fs.statSync(tempPath);
        const sizeAfter = (statsAfter.size / 1024).toFixed(2);

        if (statsAfter.size < stats.size) {
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);
            const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);
            console.log(`✅ ${path.relative(assetsDir, filePath)}: ${sizeBefore}KB → ${sizeAfter}KB (${reduction}% reduction)`);
        } else {
            fs.unlinkSync(tempPath);
            console.log(`⏩ ${path.relative(assetsDir, filePath)}: Already optimized`);
        }
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
}

(async () => {
    console.log('🔍 Searching for images in src/assets...');
    const files = await getAllFiles(assetsDir);
    console.log(`Found ${files.length} images to process...\n`);

    for (const file of files) {
        await compressImage(file);
    }

    console.log('\n✨ All images processed successfully!');
})();
