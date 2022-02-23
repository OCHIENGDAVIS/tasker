const express = require('express');
const router = express.Router();

router.get('/assigned', (req, res) => {
  return res.json({ message: 'Protected task page' });
});

module.exports = router;
