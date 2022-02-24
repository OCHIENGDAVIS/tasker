const request = require('supertest');

const app = require('../app');
const { User } = require('../models');

afterEach(async () => {
  await User.destroy({ where: {} });
});

describe('Authentication', () => {
  describe('POST /personnel/register', () => {
    describe('When given all the correct details', () => {
      it('saves a user to the database and return the User', async () => {
        const response = await request(app).post('/personnel/register').send({
          email: '1mail@gmial.com',
          firstname: 'somefirstname',
          lastname: 'somelastname',
          password: 'somepassword',
          phone: '12345',
        });
        const { email, firstname, lastname } = response.body;
        // expect(response.statusCode).toBe(201);
        expect(email).toBe('1mail@gmial.com');
        expect(firstname).toBe('somefirstname');
        expect(lastname).toBe('somelastname');
        // expect(response.headers['Content-Type']).toMatch(/json/);
      });
      it('saves a user to the database and return 201 status', async () => {
        const response = await request(app).post('/personnel/register').send({
          email: '1mail@gmial.com',
          firstname: 'somefirstname',
          lastname: 'somelastname',
          password: 'somepassword',
          phone: '12345',
        });
        expect(response.statusCode).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
      });
    });
    describe('when not given required fields ', () => {
      it('does not create a user', async () => {
        const response = await request(app)
          .post('/personnel/register')
          .send({});
        expect(response.statusCode).toBe(400);
        expect(response.body.erros.length).toBeGreaterThan(0);
      });
    });
  });
  describe('POST /personnel/login', () => {
    describe('when given correct username and password', () => {
      it('logs user in and return JSON Web Token', async () => {
        await request(app).post('/personnel/register').send({
          email: 'test@gmial.com',
          firstname: 'somefirstname',
          lastname: 'somelastname',
          password: 'testpassword',
          phone: '2222222222',
        });
        const response = await request(app).post('/personnel/login').send({
          password: 'testpassword',
          phone: '2222222222',
        });
        const { accessToken } = response.body;
        expect(accessToken).toBeTruthy();
        expect(accessToken).toBeDefined();
        expect(response.body).toHaveProperty('reset_password', 0);
        expect(response.body).toHaveProperty('expires_in', '24h');
      });
      describe('when given no username and password', () => {
        it('returns an error message', async () => {
          const response = await request(app).post('/personnel/login').send({});
          const { erros } = response.body;
          expect(erros.length).toBeGreaterThan(0);
        });
      });
      describe('when given wrong username and password', () => {
        it('returns an error message', async () => {
          const response = await request(app).post('/personnel/login').send({
            phone: '123456',
            password: 'wrongpassword',
          });
          const { error } = response.body;
          expect(error).toHaveProperty('password', 'incorrect password');
        });
      });
    });
  });
});
