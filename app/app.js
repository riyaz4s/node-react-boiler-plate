const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const helmet = require('helmet');
const config = require('./config');
const setConfig = require('./middleware/set-config');
const routes = require('./routes/route');

const app = express();

app.use(helmet());
app.use(compression());

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use(cookieParser());
app.use(setConfig);

app.enable('view cache');
app.engine('.html', exphbs({
  defaultLayout: 'layout',
  extname: '.html'
}));
app.set('view engine', '.html');

app.use(express.static(path.join(__dirname, '..', 'public')));


app.use(config.appRoute, routes);

app.get(`${config.appRoute}/*`, async(req, res) => {
  return res.render('home', req.tokens);
});

module.exports = app;

