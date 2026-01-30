const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets/Gallery');
const outputDir = path.join(__dirname, 'src/assets/Gallery-optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files (excluding files with "copy" in the name)
const files = fs.readdirSync(inputDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    const hasValidExt = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].includes(ext);
    const noCopyInName = !file.toLowerCase().includes('copy');
    return hasValidExt && noCopyInName;
});

console.log(`Found ${files.length} images to compress...`);

// Compress each image
let processed = 0;
const totalFiles = files.length;

async function compressImage(filename) {
    const inputPath = path.join(inputDir, filename);
    const outputPath = path.join(outputDir, filename);

    try {
        const stats = fs.statSync(inputPath);
        const sizeBefore = (stats.size / 1024 / 1024).toFixed(2);

        await sharp(inputPath)
            .resize(1920, 1920, { // Max dimension 1920px, maintains aspect ratio
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({ quality: 80, progressive: true }) // Convert to JPEG with 80% quality
            .toFile(outputPath.replace(/\.(png|PNG|jpg|jpeg|JPG|JPEG)$/, '.jpg'));

        const statsAfter = fs.statSync(outputPath.replace(/\.(png|PNG|jpg|jpeg|JPG|JPEG)$/, '.jpg'));
        const sizeAfter = (statsAfter.size / 1024 / 1024).toFixed(2);
        const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);

        processed++;
        console.log(`[${processed}/${totalFiles}] ${filename}: ${sizeBefore}MB → ${sizeAfter}MB (${reduction}% reduction)`);
    } catch (error) {
        console.error(`Error processing ${filename}:`, error.message);
    }
}

// Process all images
(async () => {
    for (const file of files) {
        await compressImage(file);
    }
    console.log('\n✅ All images compressed successfully!');
    console.log(`Output directory: ${outputDir}`);
})();
