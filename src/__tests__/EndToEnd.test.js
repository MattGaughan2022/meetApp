import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch(
    //   {
      // headless: false,
      // slowMo: 250, // slow down by 250ms,
      // timeout: 0 
    // }
    );
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#event-item');
  });

  afterAll(() => {
    browser.close();
  });

  
    test('An event element is collapsed by default', async () => {
        // if your event's details have a different selector, use it instead of .event .details
        const eventDetails = await page.$('.details');
        expect(eventDetails).toBeNull();
      });

      test('User can expand an event to see its details', async () => {
        await page.click('.up-details');
        const eventDetails = await page.$('.details');
        expect(eventDetails).toBeDefined();
        browser.close();
      });
});