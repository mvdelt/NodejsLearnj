var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//jun routing
app.get('/productyo', function(reqj, resj){
  resj.render('prj',{
    titlej: 'prod ppppp  jjj!!'
  });
})
////////////////
app.get('/edj', function(reqj, resj){
  resj.render('./prov/edj',{
    titlej: 'edj j!!'
  });
})
app.get('/prov', function(reqj, resj){
  resj.render('./prov',{
    titlej: 'prov j!!'
  });
})
app.get('/insj', function(reqj, resj){
  resj.render('./prov/insj',{
    titlej: 'insj j!!'
  });
})
////////////////


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
