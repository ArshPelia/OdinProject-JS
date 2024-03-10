var express = require('express');
var router = express.Router();

/* GET sign-up page. */
router.get('/', function(req, res, next) {
  res.render('sign-up', { });
});

// sign-up form submission
router.post("/", async (req, res, next) => {
  try {
    const user = new User({
      firstName: req.body.FirstName,
      lastName: req.body.LastName,
      email: req.body.email,
      password: req.body.password
    });
    const result = await user.save();
    res.redirect("/");
  } catch(err) {
    return next(err);
  };
});

module.exports = router;
