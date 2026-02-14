const fs = require('fs');
try {
    const report = JSON.parse(fs.readFileSync('lighthouse-report.json'));
    const categories = report.categories;
    console.log('Performance:', categories.performance.score * 100);
    console.log('Accessibility:', categories.accessibility.score * 100);
    console.log('Best Practices:', categories['best-practices'].score * 100);
    console.log('SEO:', categories.seo.score * 100);
} catch (e) {
    console.error("Error reading report:", e.message);
}
