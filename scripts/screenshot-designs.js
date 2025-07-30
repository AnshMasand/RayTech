// Alternative: Use this Node.js script if you want to try automated screenshots
// Run: npm install playwright
// Then: node scripts/screenshot-designs.js

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function captureScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport for high-quality screenshots
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  const designs = [
    {
      url: 'http://localhost:3000',
      filename: 'raytech-original-design.png',
      title: 'Raytech Original Design'
    },
    {
      url: 'http://localhost:3000/design1',
      filename: 'raytech-clean-business-design.png',
      title: 'Raytech Clean Business Design'
    },
    {
      url: 'http://localhost:3000/design2',
      filename: 'raytech-industrial-design.png',
      title: 'Raytech Industrial Design'
    }
  ];

  // Create output directory
  const outputDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const design of designs) {
    try {
      console.log(`Capturing screenshot for ${design.title}...`);
      
      await page.goto(design.url, { 
        waitUntil: 'networkidle' 
      });
      
      // Wait for animations
      await page.waitForTimeout(3000);
      
      // Take full page screenshot
      const outputPath = path.join(outputDir, design.filename);
      await page.screenshot({
        path: outputPath,
        fullPage: true
      });
      
      console.log(`✓ Generated: ${design.filename}`);
      
    } catch (error) {
      console.error(`✗ Error capturing ${design.title}:`, error.message);
    }
  }
  
  await browser.close();
  console.log(`\nAll screenshots saved in: ${outputDir}`);
  console.log('\nTo convert screenshots to PDF:');
  console.log('1. Open each image in Preview (Mac) or similar app');
  console.log('2. File > Export as PDF');
  console.log('3. Or use online tools like "img2pdf" or "SmallPDF"');
}

if (require.main === module) {
  captureScreenshots().catch(console.error);
} 

