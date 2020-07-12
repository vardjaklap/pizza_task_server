var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mainAPIRouter = require('./routes/mainAPI');
var findOrdersAPI = require('./routes/findOrdersAPI');
var insertOrderAPI = require('./routes/insertOrder');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", mainAPIRouter);
app.use("/findOrders", findOrdersAPI);
app.use("/insertOrder", insertOrderAPI);

app.post('/usdToEur', (req, res, next) => {
  let eur = (parseFloat(req.body.usd) * 0.88494).toString();
  console.log(eur);
  res.send(eur);
});


// app.post('/findOrders', (req, res, next) => {
//   res.send("test");
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
