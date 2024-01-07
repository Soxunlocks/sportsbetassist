const mongoose = require('mongoose');

const userBettingHistorySchema = new mongoose.Schema({
  userId: { type: String, required: true },
  bets: [{
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'SportEvent' },
    odd: { type: mongoose.Schema.Types.ObjectId, ref: 'Odd' },
    stake: { type: Number, required: true },
    predictedOutcome: { type: String, required: true },
    outcome: { type: String, default: 'pending' },
    profitLoss: { type: Number },
    betTime: { type: Date, default: Date.now },
  }],
}, { timestamps: true });

module.exports = mongoose.model('UserBettingHistory', userBettingHistorySchema);
