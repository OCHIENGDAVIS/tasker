const passport = require('passport');
const PassportLocal = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const { User } = require('../models');

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new PassportLocal(
    {
      usernameField: 'phone',
      passwordField: 'password',
    },
    async (phone, password, done) => {
      try {
        const user = await User.findOne({ where: { phone } });
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return done(null, false, { message: 'Wrong Password' }); // stes status code to 401
        }
        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
