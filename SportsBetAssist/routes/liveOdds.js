const express = require('express');
const router = express.Router();

router.post('/update', (req, res) => {
  const emitLiveOdds = req.app.emitLiveOdds;
  let oddsData = req.body;
  emitLiveOdds(oddsData);
  res.status(200).send('Odds updated');
});

router.post('/bet', (req, res) => {
  const { betDetails } = req.body;
  if (!req.session.bets) {
    req.session.bets = [];
  }
  req.session.bets.push(betDetails);
  res.status(200).json({ message: 'Bet successfully recorded', bets: req.session.bets });
});

router.get('/my-bets', (req, res) => {
  res.status(200).json({ bets: req.session.bets || [] });
});

module.exports = router;
