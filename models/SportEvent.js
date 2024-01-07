const mongoose = require('mongoose');

const sportEventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  participants: [String],
}, { timestamps: true });

module.exports = mongoose.model('SportEvent', sportEventSchema);
