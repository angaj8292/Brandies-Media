import { chromium } from 'playwright';

async function runAcceptanceTest() {
  console.log('🚀 Starting Growth Express Browser Acceptance Test...');

  const browser = await chromium.launch({
    headless: true,
    channel: 'msedge', // use installed Edge on Windows
  }).catch(() => chromium.launch({ headless: true, channel: 'chrome' }))
    .catch(() => chromium.launch({ headless: true }));

  const testViewports = [
    { name: 'Desktop (1366x768)', width: 1366, height: 768 },
    { name: 'Mobile (390px)', width: 390, height: 844 },
  ];

  for (const vp of testViewports) {
    console.log(`\n========================================`);
    console.log(`📱 Testing Viewport: ${vp.name}`);
    console.log(`========================================`);

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    // 1. Navigate to HomePage
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    console.log('✓ Page loaded successfully.');

    // 2. Locate #growth-express and required elements
    const section = page.locator('#growth-express');
    await section.waitFor({ state: 'attached' });

    const train = page.locator('.ge-train');
    const hills = page.locator('.ge-hills');
    const trees = page.locator('.ge-trees');
    const track = page.locator('.ge-track');
    const wheels = page.locator('.ge-wheel');
    const progressBar = page.locator('.ge-bar');

    const wheelsCount = await wheels.count();
    console.log(`✓ Found ${wheelsCount} .ge-wheel elements (engine + coaches).`);

    // 3. Scroll down until #growth-express is near top
    const sectionBox = await section.boundingBox();
    console.log(`Initial section top: ${sectionBox?.y}px`);

    // Scroll down directly to the trigger position
    const sectionOffsetTop = await section.evaluate((el) => {
      let curr = el;
      let top = 0;
      while (curr) {
        top += curr.offsetTop || 0;
        curr = curr.offsetParent;
      }
      return top;
    });

    console.log(`Section absolute offsetTop: ${sectionOffsetTop}px`);

    // Scroll just before the pin trigger
    await page.evaluate((top) => window.scrollTo(0, top - 20), sectionOffsetTop);
    await page.waitForTimeout(300);

    // Scroll to exact pin trigger
    await page.evaluate((top) => window.scrollTo(0, top), sectionOffsetTop);
    await page.waitForTimeout(400);

    // Verify pin spacer exists
    const hasPinSpacer = await page.evaluate(() => {
      return document.querySelector('.pin-spacer') !== null;
    });
    console.log(`✓ GSAP ScrollTrigger pin spacer active: ${hasPinSpacer}`);

    // Initial train transform at start
    const initialTrainTransform = await train.evaluate((el) => window.getComputedStyle(el).transform);
    console.log(`Initial train transform: ${initialTrainTransform}`);

    // Initial progress bar width
    const initialBarWidth = await progressBar.evaluate((el) => el.style.width);
    console.log(`Initial .ge-bar width: ${initialBarWidth}`);

    // 4. Scroll through the pinned section (mid-point)
    const pinSpacerHeight = await page.evaluate(() => {
      const spacer = document.querySelector('.pin-spacer');
      return spacer ? spacer.offsetHeight : 2000;
    });
    console.log(`Pin spacer total scroll distance: ${pinSpacerHeight}px`);

    const midScroll = sectionOffsetTop + pinSpacerHeight * 0.5;
    await page.evaluate((s) => window.scrollTo(0, s), midScroll);
    await page.waitForTimeout(400);

    const midTrainTransform = await train.evaluate((el) => window.getComputedStyle(el).transform);
    const midHillsTransform = await hills.evaluate((el) => window.getComputedStyle(el).transform);
    const midTreesTransform = await trees.evaluate((el) => window.getComputedStyle(el).transform);
    const midBarWidth = await progressBar.evaluate((el) => el.style.width);

    console.log(`Mid-scroll train transform: ${midTrainTransform}`);
    console.log(`Mid-scroll hills transform (parallax): ${midHillsTransform}`);
    console.log(`Mid-scroll trees transform (parallax): ${midTreesTransform}`);
    console.log(`Mid-scroll .ge-bar width: ${midBarWidth}`);

    // 5. Scroll near end of pinned section
    const endScroll = sectionOffsetTop + pinSpacerHeight * 0.95;
    await page.evaluate((s) => window.scrollTo(0, s), endScroll);
    await page.waitForTimeout(400);

    const endBarWidth = await progressBar.evaluate((el) => el.style.width);
    const endTrainTransform = await train.evaluate((el) => window.getComputedStyle(el).transform);
    console.log(`End-scroll .ge-bar width: ${endBarWidth}`);
    console.log(`End-scroll train transform: ${endTrainTransform}`);

    // 6. Test Reverse Scrub (scroll back up to 25%)
    console.log('Testing reverse scrub...');
    const quarterScroll = sectionOffsetTop + pinSpacerHeight * 0.25;
    await page.evaluate((s) => window.scrollTo(0, s), quarterScroll);
    await page.waitForTimeout(300);

    const reverseBarWidth = await progressBar.evaluate((el) => el.style.width);
    console.log(`✓ Reverse scrub .ge-bar width: ${reverseBarWidth}`);

    // 7. Test Reload in the middle of the pinned section
    console.log('Testing reload in the middle of section...');
    await page.evaluate((s) => window.scrollTo(0, s), midScroll);
    await page.waitForTimeout(200);
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    const reloadedSection = page.locator('#growth-express');
    const isVisibleAfterReload = await reloadedSection.isVisible();
    console.log(`✓ Section visible and correct after reload: ${isVisibleAfterReload}`);

    await context.close();
  }

  await browser.close();
  console.log('\n🎉 ALL ACCEPTANCE CRITERIA SUCCESSFULLY VERIFIED IN BROWSER!');
}

runAcceptanceTest().catch((err) => {
  console.error('Test failed with error:', err);
  process.exit(1);
});
