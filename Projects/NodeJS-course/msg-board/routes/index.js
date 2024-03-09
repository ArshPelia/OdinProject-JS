var express = require('express');
var router = express.Router();

const msgs = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(msgs)
  res.render('index', { title: 'Express', messages: msgs });
});

module.exports = router;
