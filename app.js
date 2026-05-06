const express = require('express');
const mongoose = require('mongoose');
const client = require('prom-client');

const app = express();

mongoose.connect('mongodb://mongodb:27017/todos');

const TodoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model('Todo', TodoSchema);

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequests = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP Requests'
});

register.registerMetric(httpRequests);

app.get('/', async (req, res) => {
  httpRequests.inc();

  const todos = await Todo.find();

  res.json({
    message: 'Todo App Running 🚀',
    todos
  });
});

app.get('/add', async (req, res) => {
  aiwait Todo.create({
    task: 'Learn DevOps'
  });

  res.send('Todo Added');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
