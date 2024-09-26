const express = require('express');
const { getDate } = require('./modules/utils');
const messages = require('./lang/en/string.json'); // Import messages from the en.js file
const app = express();
const port = process.env.PORT || 3000;

// Define the GET route
app.get('/COMP4537/labs/3/getDate/', (req, res) => {
    const name = req.query.name || 'Guest'; // Get the name from query parameters
    const currentTime = getDate(); // Get the current server time using the utility function
    // Prepare the response message
    const message = `<div style="color: blue;">${messages.greeting.replace('%name', name).replace('%time', currentTime)}</div>`;
    // Send the response
    res.send(message);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
