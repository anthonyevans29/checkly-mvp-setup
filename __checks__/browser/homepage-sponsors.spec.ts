import { BrowserCheck, defineCheck } from '@checkly/cli';

defineCheck(new BrowserCheck('Check Homepage Sponsors', {
  name: 'Check Homepage Sponsors',
  script: `
    const { chromium } = require('playwright');
    (async () => {
      const browser = await chromium.launch();
      const page = await browser.newPage();
      await page.goto('https://www.acme.com');
      const sponsorLogos = await page.$$eval('.sponsor-logo', logos => logos.length);
      if (sponsorLogos === 0) {
        throw new Error('Sponsor logos not found');
      }
      await browser.close();
    })();
  `,
}));
