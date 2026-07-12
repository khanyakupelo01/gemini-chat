// app.js
const express = require('express');
const app = express();


//NOTE -  Tells Express: “If someone visits my site, look inside the public folder and send files from there. ”Example: if public/index.html exists, visiting / can show that page. “Static” means normal files (HTML, CSS, JS, images) that are sent as-is.

app.use(express.static("public"));

const moods = [
  { mood: 'excited about express!' },
  { mood: 'route-tastic!' }
];

//NOTE - Because this is our first route, it will always be checked first. If the request is for /moods, it will be handled here. If not, it will move on to the next route. is this efficient?
app.get('/moods', (req, res, next) => {
  res.json(moods);
});

app.get('/expressions', (req, res, next) => {
  res.send([
    { expression: 'I love Express!' },
    { expression: 'Express is my favorite framework!' }
  ]);
});

app.get('/expressions/:id', (req, res, next) => {

  const found = getElementById(req.params.name, expressions);

  if (!found) {
    res.status(404).send('Expression not found');
    return;
  }
  res.send(found);
});


module.exports = { app };
