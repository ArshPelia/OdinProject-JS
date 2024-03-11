require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//setup routers
var usersRouter = require('./routes/users');
var signUpRouter = require('./routes/signup');
const messageBoardRouter = require("./routes/messageboard");

// Middleware for authentication
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.mongoDB;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("MongoDB connected successfully!");
}

const User = mongoose.model('User');

//init app
var app = express();

// Link stylesheet
app.use('/public', express.static('public'));

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Logger middleware
app.use(logger('dev'));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static file serving middleware
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for authentication
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware to track current user
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  // console.log('Current User Saved: '+ res.locals.currentUser);
  next();
});

// Routes initialization
app.use('/users', usersRouter);
app.use('/signup', signUpRouter);
app.use("/messageboard", messageBoardRouter);

// Default route
app.get("/", (req, res) => {
  console.log('Rendering index page');
  res.render("index", { user: req.user });
});

// Logout route
app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    console.log('User logged out');
    res.redirect("/");
  });
});

// Passport configuration
passport.use(new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      console.log('Authenticating...');
      const user = await User.findOne({ email: email });
      if (!user) {
        console.log("Incorrect email");
        return done(null, false, { message: "Incorrect email" });
      }
      // const match = await bcrypt.compare(password, user.password);
      // if (!match) {
      if(password === user.password){
        console.log("Incorrect password: " + password);
        console.log("Correct password: " + user.password);
        return done(null, false, { message: "Incorrect password" });
      }
      console.log("Authentication successful");
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (_id, done) => {
  try {
    const user = await User.findById(_id);
    done(null, user);
  } catch (err) {
    done(err);
  };
});

// Login route
app.post("/log-in", passport.authenticate("local", {
  successRedirect: "/messageboard",
  failureRedirect: "/"
}));

// Error handling middleware
app.use(function (req, res, next) {
  next(createError(404));
});

// Final error handling middleware
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // log the error
  console.error(err.stack);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// // Server initialization
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

module.exports = app;
