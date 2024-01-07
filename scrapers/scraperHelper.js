const playwright = require('playwright');

async function scrapeOddsFromWebsite(url, pageFunction) {
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();
    let oddsData;

    try {
        await page.goto(url, {
            waitUntil: 'domcontentloaded'
        });
        oddsData = await page.evaluate(pageFunction);
    } catch (error) {
        console.error(`Error scraping ${url}: ${error}`);
    } finally {
        await browser.close();
    }
    return oddsData;
}

module.exports = { scrapeOddsFromWebsite };
