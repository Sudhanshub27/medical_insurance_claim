import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // iPhone 12 Pro dimensions
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    isLandscape: false,
  });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  await page.screenshot({ path: 'C:/Users/Sudhanshu/.gemini/antigravity/brain/a19bf60b-f0d1-44da-bc2c-7d80ae22e3ae/mobile_test.png', fullPage: false });
  
  await browser.close();
  console.log("Screenshot saved!");
})();
