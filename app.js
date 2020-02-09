'use strict';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var paginate = require('express-paginate');
var routerRegister = require('./routers/router.register.js');
var session = require('express-session');
var contextProcessor = require('./middlewares/context.processor.js');

var app = express();

// View Engine SetUp
nunjucks.configure(
  [
    'views',
    'views/cataloguedm',
    'views/cataloguedm/partials',
    'views/cartdm',
    'views/cartdm/partials',
    'views/checkoutdm'
  ],
  {
    autoescape: true,
    express: app
  }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Pagination Middleware
app.use(paginate.middleware(9, 20));

app.use(
  session({
    secret: '95371e2f-a487-4e22-a9e2-8b6356b85453',
    proxy: true,
    resave: true,
    saveUninitialized: true
  })
);

//Make the cart parameters available to the templates
app.use(contextProcessor.localContext);

// Register the Routers
routerRegister(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 2001);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
