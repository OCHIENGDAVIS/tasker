const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  return res.json({ message: 'task get route' });
});

router.get('/assigned', (req, res) => {
  return res.json({ message: 'task asingned route' });
});

module.exports = router;
