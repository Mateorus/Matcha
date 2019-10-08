const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(/.*/, (req, res) => 
  res.send('index.html'));

app.post('/api/test', (req, res) => {
  console.log(req.body);
  res.json({success: true})
})

const user = require('./routes/user');
app.use('/user', user);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Connected to db'))
  .then(() => app.listen(keys.port, () => console.log(`Up on port:${keys.port}`)))
  .catch(e => console.log(e));