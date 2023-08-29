// Create web server 
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page
// 4. Create a route for the contact page
// 5. Create a 404 page
// 6. Start and listen server on port 3000

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for the home page
app.get('/', (req, res) => {
    res.send('This is the home page');
});

// 3. Create a route for the about page
app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// 4. Create a route for the contact page
app.get('/contact', (req, res) => {
    res.send('This is the contact page');
});

// 5. Create a 404 page
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// 6. Start and listen server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});