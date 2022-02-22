const express = require('express');

const router = express.Router();

router.get('/test', (req, res) => {
  return res.json({ mesage: 'Hello there' });
});

router.post('/login', (req, res) => {
  return res.json({ message: 'Post route' });
});

module.exports = router;
