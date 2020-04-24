'use strict';

const express = require('express');
const app = express();
app.use(express.static('view'));
app.get('/', (req, res, next) => {
  res.redirect('/app');
});
app.listen(3001, 'localhost');
console.log('Server listening on: localhost:3001');
