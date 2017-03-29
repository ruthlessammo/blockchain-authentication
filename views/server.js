const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.listen(config.port, function() {
  console.log('Server up and listening on port %d', config.port);
});
