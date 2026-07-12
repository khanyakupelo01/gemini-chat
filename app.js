// app.js
const express = require('express');
const app = express();


//NOTE -  Tells Express: “If someone visits my site, look inside the public folder and send files from there. ”Example: if public/index.html exists, visiting / can show that page. “Static” means normal files (HTML, CSS, JS, images) that are sent as-is.

app.use(express.static("public"));
const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');
const moods = [
  { mood: 'excited about express!' },
  { mood: 'route-tastic!' }
];
const expressions = [];
seedElements(expressions, 'expressions');

//NOTE - Because this is our first route, it will always be checked first. If the request is for /moods, it will be handled here. If not, it will move on to the next route. is this efficient?
app.get('/moods', (req, res, next) => {
  res.json(moods);
});

app.get('/expressions', (req, res, next) => {
  res.send(expressions);
});

app.get('/expressions/:id', (req, res, next) => {

  const found = getElementById(req.params.id, expressions);

  if (!found) {
    res.status(404).send('Expression not found');
    return;
  }
  res.send(found);
});

app.put('/expressions/:id', (req, res, next) => {
  const expressionIndex = getIndexById(req.params.id, expressions);
  if (expressionIndex !== -1) {
    updateElement(req.params.id, req.query, expressions);
    res.send(expressions[expressionIndex]);
  } else {
    res.status(404).send();
  }
});
app.post('/expressions', (req, res, next) => {
  const receivedExpression = createElement('expressions', req.query);
  if (receivedExpression) {
    expressions.push(receivedExpression);
    res.status(201).send(receivedExpression);
  } else {
    res.status(400).send();
  }
});

module.exports = { app };
