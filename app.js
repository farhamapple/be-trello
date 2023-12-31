const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./app/routes/auth')
const todosRouter = require('./app/api/todos/router');
const itemsRouter = require('./app/api/items/router');

const URL = '/api/v1'
const app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.json({
      message : "Welcome API Clone Trello",
      version : "1.0"
    })
})
app.use(`${URL}`, authRouter);
app.use(`${URL}`, todosRouter);
app.use(`${URL}`, itemsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404;
  next(err);
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
