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
  res.render('index', { title: 'Express', messages: msgs });
});

/* POST new message */
router.post('/new', function(req, res, next) {
  const { msg, author } = req.body; // Assuming you're sending 'msg' and 'author' fields from the form
  if(msg && author) {
    msgs.push({
      text: msg,
      user: author,
      added: new Date()
    });
    msgs.push(newMessage);
    res.redirect('/'); // Redirect to home page after adding the new message
  } else {
    res.status(400).send('Invalid request');
  }
});

module.exports = router;
