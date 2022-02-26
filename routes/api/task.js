const { compareSync } = require('bcryptjs');
const express = require('express');
const router = express.Router();

const { Task } = require('../../models');

router.post('/create', async (req, res) => {
  const { id } = req.user;
  const isEmpty = Object.keys(req.body).length === 0;
  if (isEmpty) {
    return res.status(400).json({
      message:
        'a task must have some properties such as "customer_phone", "customer_first_name" etc',
    });
  }
  try {
    const task = await Task.create({ ...req.body, userId: id });
    return res.status(201).json(task);
  } catch (error) {
    return res.status(400).send({ message: 'something went wrong' });
  }
});

router.get('/assigned', async (req, res) => {
  // get url query parameters from the browser
  const { id } = req.user;
  const { order, orderMethod } = req.query;
  const pageAsNumber = Number.parseInt(req.query.page);
  const limitAsNumber = Number.parseInt(req.query.limit);

  // check to see whether the page query sent by a user is a number and its > o
  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }
  // check to see whether the page query sent by a user is a number and its > o
  let limit = 5;
  if (!Number.isNaN(limitAsNumber) && limitAsNumber > 0) {
    limit = limitAsNumber;
  }
  // handling the orderby query params if present
  let filterDefault = ['createdAt', 'ASC'];
  if (order && orderMethod) {
    filterDefault = [order, orderMethod];
  }
  try {
    const assignedTasks = await Task.findAndCountAll({
      limit,
      offset: page * limit,
      where: { userId: id },
      order: [filterDefault],
    });
    return res.status(200).json({
      totalTasks: assignedTasks.count,
      page: page,
      perpage: limit,
      tasks: assignedTasks.rows,
    });
  } catch (error) {
    res.status(400).json({ message: 'something went wrong' });
  }
});

module.exports = router;
