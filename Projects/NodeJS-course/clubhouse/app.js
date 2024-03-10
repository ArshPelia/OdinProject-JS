var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//setup routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signUpRouter = require('./routes/signup');

// Middleware for authentication
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://arshpelia1:AGVARp2qdueKu2VN@cluster0.eldknbb.mongodb.net/local_library?retryWrites=true&w=majority&appName=Clust";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

//init app
var app = express();

// setup view engine 
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signUpRouter);

// Middleware for authentication
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

//link stylesheet
app.use('/public', express.static('public'));

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
