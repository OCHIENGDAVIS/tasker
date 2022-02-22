const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post(
  '/register',
  body('email').not().isEmpty().trim().escape(),
  body('email').isEmail(),
  body('firstname').not().isEmpty().trim().escape(),
  body('lastname').not().isEmpty().trim().escape(),
  body('password').not().isEmpty().trim().escape(),
  body('phone').not().isEmpty().trim().escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    return res.json({ mesage: 'Hello there' });
  }
);

router.post(
  '/login',
  body('phone').not().isEmpty().trim().escape(),
  body('password').not().isEmpty().trim().escape(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    return res.json({ message: 'Post route' });
  }
);

module.exports = router;
