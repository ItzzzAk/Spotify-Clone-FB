const express = require('express');
const router = express.Router();

// Require signup and login routes
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));

// Render index.ejs for the default route '/'
router.get('/', (req, res) => {
    res.render('index'); // Render the index page
});

// Main page route
router.get('/main-page', (req, res) => {
    res.render('main'); // Render the main page
});

module.exports = router;

