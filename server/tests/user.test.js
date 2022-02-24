const request = require('supertest');

const app = require('../app');
const { User } = require('../models');

afterEach(async () => {
  await User.destroy({ where: {} });
});

describe('Authentication', () => {
  describe('POST /personnel/register', () => {
    describe('When given all the correct details', () => {
      it('saves a user to the database and the User', async () => {
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
        console.log(response.body);
        expect(response.statusCode).toBe(400);
        expect(response.body.erros.length).toBeGreaterThan(0);
      });
    });
  });
});
