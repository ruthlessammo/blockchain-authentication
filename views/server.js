const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  verify: function(req,res,buf) {
    req.rawBody = buf.toString();
  }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.listen(config.port, function() {
  console.log('Server up and listening on port %d', config.port);
});

const subscription = require('./models/subscription');

subscription.setup(function(hashClient) {
  const routes = require('./routes/app')(app, hashClient);

  app.listen(config.port, function() {
    console.log('Server up and listening on port %d', config.port);
  });
});
