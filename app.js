const express = require('express');
const expressSession = require('express-session'); 
const databaseConfig = require('./config/database'); 
const app = express();

// Require the route handlers
const indexRoute = require('./routes/index');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');

// Middleware
app.use("/static", express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Use routes
app.use('/signup', signupRoute);
app.use("/login", loginRoute);

// Set view engine
app.set('view engine', 'ejs');

// Set up routes
app.use('/', indexRoute);

// Set up port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
