const express = require('express');
const { generateBettingAdvice } = require('../helpers/adviceGeneratorHelper');
const router = express.Router();

router.post('/', async (req, res) => {
  const oddsData = req.body;

  try {
    const advice = await generateBettingAdvice(oddsData);
    res.json({ advice });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating betting advice');
  }
});

module.exports = router;
