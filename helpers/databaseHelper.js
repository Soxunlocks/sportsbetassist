const Odd = require('../models/Odd');
const SportEvent = require('../models/SportEvent');

async function updateOddsData(source, oddsData) {
    try {
        // Here you would process the oddsData and update your MongoDB collections
        // The following code assumes you have a method to identify and update/create events and their related odds
        for (let eventOdds of oddsData) {
            const { eventName, startTime, participants, odds } = eventOdds;
            let event = await SportEvent.findOneAndUpdate(
                { name: eventName, startTime: startTime },
                { participants: participants },
                { upsert: true, new: true }
            );

            await Odd.findOneAndUpdate(
                { event: event._id, source: source },
                { odds: odds, lastUpdated: new Date() },
                { upsert: true }
            );
        }
    } catch (error) {
        console.error(`Error updating odds data: ${error}`);
    }
}

module.exports = { updateOddsData };
