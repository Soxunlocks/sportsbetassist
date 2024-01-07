const mongoose = require('mongoose');

const oddSchema = new mongoose.Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'SportEvent', required: true },
  source: { type: String, required: true },
  odds: { type: Map, of: Number, required: true },
  lastUpdated: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Odd', oddSchema);
