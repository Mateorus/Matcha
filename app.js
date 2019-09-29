const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const User = require('./models/User');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => 
  res.sendFile(__dirname + '/public/index.html'));

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to db'))
  .then(() => app.listen(PORT, () => console.log(`Up on port:${PORT}`)))
  .catch(e => console.log(e));

