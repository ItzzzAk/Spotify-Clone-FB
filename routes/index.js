const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.render('login'); // Render homepage template
});

// Require and use other route files if needed
router.use('/auth', require('./auth'));
router.use('/api', require('./api'));

module.exports = router;
