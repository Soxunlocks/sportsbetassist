const express = require('express');
const router = express.Router();

router.post('/set-preferences', (req, res) => {
  const preferences = req.body;
  req.session.preferences = preferences;
  res.status(200).json({ message: 'Preferences saved successfully' });
});

router.get('/get-preferences', (req, res) => {
  res.status(200).json({ preferences: req.session.preferences || {} });
});

module.exports = router;
