const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('../models');
const keys = require('../config');

const router = express.Router();

router.post(
  '/register',
  body('email').not().isEmpty().trim().escape(),
  body('email').isEmail(),
  body('firstname').not().isEmpty().trim().escape(),
  body('lastname').not().isEmpty().trim().escape(),
  body('password').not().isEmpty().trim().escape(),
  body('phone').not().isEmpty().trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    try {
      const { email, firstname, lastname, password, phone } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        email,
        firstname,
        lastname,
        phone,
        password: hashedPassword,
      });
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ mesage: 'Something went wrong' });
    }
  }
);

router.post(
  '/login',
  body('phone').not().isEmpty().trim().escape(),
  body('password').not().isEmpty().trim().escape(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    try {
      const { phone, password } = req.body;

      const user = await User.findOne({ where: { phone } });
      if (!user) {
        return res
          .status(400)
          .json({ error: { password: 'incorrect password' } });
      }
      const IsvalidPassword = await bcrypt.compare(password, user.password);
      if (!IsvalidPassword) {
        return res
          .status(400)
          .json({ error: { password: 'incorrect password' } });
      }
      const token = await jwt.sign({ user }, keys.JWT_SECRET, {
        expiresIn: '24h',
      });
      return res.json({
        reset_password: 0,
        accessToken: token,
        expires_in: '24h',
      });
    } catch (error) {
      return res.status(400).json({ message: 'Something went wrong' });
    }
  }
);

module.exports = router;
