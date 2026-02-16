const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
console.log('Script started. Root directory:', rootDir);
const assetsDir = path.join(rootDir, 'frontend/src/assets');
const srcDir = path.join(rootDir, 'frontend/src');

// Common image extensions
const extensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif']);

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

// 1. Get all images in assets
const allImages = [];
if (fs.existsSync(assetsDir)) {
    walkDir(assetsDir, (filePath) => {
        if (extensions.has(path.extname(filePath).toLowerCase())) {
            allImages.push(filePath);
        }
    });
} else {
    console.error('Assets directory not found at:', assetsDir);
    process.exit(1);
}

// 2. Get all code files to search in
const codeFiles = [];
walkDir(srcDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.js', '.jsx', '.ts', '.tsx', '.css', '.html'].includes(ext)) {
        codeFiles.push(filePath);
    }
});

console.log(`Checking ${allImages.length} images against ${codeFiles.length} source files...`);

const unusedImages = [];

// Cache file contents to speed up search
const fileContents = codeFiles.map(file => fs.readFileSync(file, 'utf8'));

allImages.forEach((imagePath, index) => {
    const imageName = path.basename(imagePath);
    if (index % 50 === 0) console.log(`Checking image ${index + 1}/${allImages.length}...`);
    let isUsed = false;

    // Direct string check
    for (const content of fileContents) {
        if (content.includes(imageName)) {
            isUsed = true;
            break;
        }
    }

    if (!isUsed) {
        unusedImages.push(path.relative(assetsDir, imagePath));
    }
});

console.log('\n--- Unused Images ---');
if (unusedImages.length === 0) {
    console.log('No unused images found!');
} else {
    unusedImages.forEach(img => console.log(img));
    console.log(`\nTotal unused: ${unusedImages.length}`);
}
