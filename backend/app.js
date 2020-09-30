const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { TeamMember } = require('./model');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/team', async (req, res, next) => {
  try {
  const team = await TeamMember.findAll();
  if (!team) return res.status(404).send();

  return res.json(team);
  } catch (err) {
    res.status(500).send();
  }
});


app.post('/team', async (req, res, next) => {
  try {
    const newMember = await TeamMember.create(req.body);
    res.json(newMember);
  } catch (error) {
    res.status(400).send();
  }
});

module.exports = app;
