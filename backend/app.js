const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./db');

const users = require('./routes/user');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected.') },
  err => { console.log('Cannot connect to the database ' + err) }
);

const app = express();

app.use(passport.initialize());
require('./passport')(passport);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', users);

app.get('/', function(req, res) {
  res.send('Hello!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is runnig on PORT ${PORT}`);
});