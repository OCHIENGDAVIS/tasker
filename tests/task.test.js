const request = require('supertest');
require('dotenv').config();

const app = require('../app');
const { Task, User } = require('../models');

afterEach(async () => {
  await Task.destroy({ where: {} });
  await User.destroy({ where: {} });
});

describe('Task Routes', () => {
  describe('POST /personel/create', () => {
    //authorised request
    describe('when given a request with a valid Bearer Token', () => {
      it('creates a new Task and return the task Create', async () => {
        // creating the user
        const regsiter = await request(app).post('/personnel/register').send({
          email: 'h@gmail.com',
          firstname: 'somefirstname',
          lastname: 'somelastname',
          password: 'somepassword',
          phone: '12345',
        });

        // loging in the user
        const response = await request(app).post('/personnel/login').send({
          password: 'somepassword',
          phone: '12345',
        });

        const { accessToken } = response.body;

        // creating the task with the token and the protected route
        const { body } = await request(app)
          .post('/tasks/create')
          .send({
            customer_first_name: 'Ian',
            personnel_first_name: 'George',
            personnel_other_name: 'Mark',
            customer_last_name: 'brown',
            ' customer_phone': '2222222',
          })
          .set('Authorization', `Bearer ${accessToken}`); //se the token in the header
        const { userId, customer_first_name, personnel_first_name } = body;
        expect(customer_first_name).toBe('Ian');
        expect(personnel_first_name).toBe('George');
        expect(userId).toBeDefined();
      });
    });
    describe('when given a request with no TOKEN', () => {
      // Unauthorise request
      it('return 401 unauthorized ', async () => {
        const { body, statusCode } = await request(app)
          .post('/tasks/create')
          .send({
            customer_first_name: 'Ian',
            personnel_first_name: 'George',
            personnel_other_name: 'Mark',
            customer_last_name: 'brown',
            ' customer_phone': '2222222',
          });

        expect(statusCode).toBe(401);
        expect(body).toMatchObject({});
      });
    });
  });
  describe(' GET /tasks/assigned', () => {
    describe('When given a valid Token and/or pagination query strings', () => {
      it('gets all the tasks assigned to the personnel while paginated', async () => {
        // create a user
        await request(app).post('/personnel/register').send({
          email: 'h@gmail.com',
          firstname: 'somefirstname',
          lastname: 'somelastname',
          password: 'somepassword',
          phone: '12345',
        });
        // Logs the user in and get a token
        const res = await request(app).post('/personnel/login').send({
          password: 'somepassword',
          phone: '12345',
        });
        const { accessToken } = res.body;

        // assin them a series of tasks (may be 10)
        for (let i = 0; i <= 50; i++) {
          await request(app)
            .post('/tasks/create')
            .send({
              customer_first_name: 'Ian',
              personnel_first_name: 'George',
              personnel_other_name: 'Mark',
              customer_last_name: 'brown',
              ' customer_phone': '2222222',
            })
            .set('Authorization', `Bearer ${accessToken}`);
        }
        //  get tasks assigned to the user
        const queryParamsObject = {
          page: 3,
          limit: 10,
          order: 'createdAt',
          orderMethod: 'DESC',
        };
        const response = await request(app)
          .get('/tasks/assigned')
          .query(queryParamsObject)
          .set('Authorization', `Bearer ${accessToken}`);
        // write the expectation
        expect(response.body.tasks.length).toBeGreaterThan(0);
        expect(response.body.page).toBe(queryParamsObject.page);
        expect(response.body.perpage).toBe(queryParamsObject.limit);
      });
    });
  });
});
