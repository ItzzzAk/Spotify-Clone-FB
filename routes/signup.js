const express = require('express');
const router = express.Router();

// Render the "signup.ejs" template when visiting /signup
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;
