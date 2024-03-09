var express = require('express');
var router = express.Router();
console.log('rendered new')

/* GET new msg page. */
router.get('/', function(req, res, next) {
    res.render('form', {});
    // console.log('rendered new')
  });

  module.exports = router;
