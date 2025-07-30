const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDFs() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport for consistent rendering
  await page.setViewport({ width: 1920, height: 1080 });
  
  const designs = [
    {
      url: 'http://localhost:3000',
      filename: 'raytech-original-design.pdf',
      title: 'Raytech Original Design'
    },
    {
      url: 'http://localhost:3000/design1',
      filename: 'raytech-clean-business-design.pdf',
      title: 'Raytech Clean Business Design'
    },
    {
      url: 'http://localhost:3000/design2',
      filename: 'raytech-industrial-design.pdf',
      title: 'Raytech Industrial Design'
    }
  ];

  // Create output directory
  const outputDir = path.join(__dirname, '..', 'pdf-exports');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  for (const design of designs) {
    try {
      console.log(`Generating PDF for ${design.title}...`);
      
      // Navigate to the page
      await page.goto(design.url, { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for any animations to complete
      await page.waitForTimeout(3000);
      
      // Generate PDF
      const outputPath = path.join(outputDir, design.filename);
      await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px'
        },
        displayHeaderFooter: true,
        headerTemplate: `
          <div style="width: 100%; font-size: 12px; text-align: center; color: #666;">
            ${design.title}
          </div>
        `,
        footerTemplate: `
          <div style="width: 100%; font-size: 10px; text-align: center; color: #666;">
            <span class="pageNumber"></span> / <span class="totalPages"></span>
          </div>
        `
      });
      
      console.log(`✓ Generated: ${design.filename}`);
      
    } catch (error) {
      console.error(`✗ Error generating PDF for ${design.title}:`, error.message);
    }
  }
  
  await browser.close();
  console.log(`\nAll PDFs generated in: ${outputDir}`);
}

generatePDFs().catch(console.error); 