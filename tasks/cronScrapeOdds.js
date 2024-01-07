const cron = require('node-cron');
const { scrapeDraftKings } = require('../scrapers/draftKingsScraper');
// Import additional scraper modules here
// ...

const { updateOddsData } = require('../helpers/databaseHelper');

// Replace the cron schedule with '* * * * *' to run the task every minute
cron.schedule('* * * * *', async () => {
    console.log('Cron job started for scraping DraftKings...');
    try {
        const oddsData = await scrapeDraftKings();
        console.log('Odds data scraped for DraftKings:', oddsData);
        if (oddsData) {
            await updateOddsData('DraftKings', oddsData);
            console.log('DraftKings data updated successfully.');
        }
    } catch (error) {
        console.error('Failed to scrape and update DraftKings:', error);
    }
});

// Add cron schedules for other sites here
