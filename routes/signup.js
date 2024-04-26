const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Step 1: Render the signup form
router.get('/', (req, res) => {
    res.render('signup');
});

// Step 2: Handle submission of step 1
router.post('/step1', async (req, res) => {
    // Process data from step 1
    const email = req.body.email;
    // Validate email and store it in the session
    req.session.email = email;
    res.redirect('/signup/step2'); // Redirect to the next step
});

// Step 2: Render the step 2 of signup form
router.get('/step2', (req, res) => {
    res.render('signup-step2');
});

// Step 2: Handle submission of step 2
router.post('/step2', async (req, res) => {
    // Process data from step 2
    const password = req.body.password;
    // Validate password and store it in the session
    req.session.password = password;
    res.redirect('/signup/step3'); // Redirect to the next step
});

// Step 3: Render the step 3 of signup form
router.get('/step3', (req, res) => {
    res.render('signup-step3');
});

// Step 3: Handle submission of step 3
router.post('/step3', async (req, res) => {
    // Process data from step 3
    const { name, dob, gender } = req.body;
    // Validate data and store it in the session
    req.session.name = name;
    req.session.dob = dob;
    req.session.gender = gender;

    // Finalize signup and save user data to the database
    const userData = {
        email: req.session.email,
        password: req.session.password,
        name,
        dob,
        gender
    };
    // Save userData to the database
    // Clear session data
    req.session.destroy((err) => {
        if (err) {
            console.error('Error clearing session:', err);
        }
        res.redirect('/main-page'); // Redirect to the main page after signup
    });
});

module.exports = router;
