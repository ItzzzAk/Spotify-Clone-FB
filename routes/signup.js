// routes/signup.js

const express = require('express');
const router = express.Router();

// Render the "signup.ejs" template when visiting /signup
router.get('/', (req, res) => {
    res.render('signup');
});

// Handle sign-up request
router.post('/', (req, res) => {
    // Logic for handling sign-up
});

module.exports = router;
