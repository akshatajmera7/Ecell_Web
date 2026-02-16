const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Target directory for images
const targetDir = path.join(__dirname, 'frontend/src/assets');

function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const images = [];
walkDir(targetDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        images.push(filePath);
    }
});

console.log(`Found ${images.length} images to compress...`);

async function compressImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + '.tmp';

    try {
        let pipeline = sharp(filePath);

        if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
        } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
        } else if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: 80 });
        }

        await pipeline.toFile(tempPath);

        const originalSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(tempPath).size;

        if (newSize < originalSize) {
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);
            console.log(`✅ Compressed: ${path.relative(targetDir, filePath)} (${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB)`);
        } else {
            fs.unlinkSync(tempPath);
            console.log(`⏩ Skipped (already optimized): ${path.relative(targetDir, filePath)}`);
        }
    } catch (err) {
        console.error(`❌ Error compressing ${filePath}:`, err.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
}

(async () => {
    for (const img of images) {
        await compressImage(img);
    }
    console.log('\nAll images processed!');
})();
