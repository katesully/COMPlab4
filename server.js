//LLMs were used in the creation of this code

const express = require('express');
const { getDate } = require('./modules/utils');
const messages = require('./lang/en/string.json'); // Import messages from the en.js file

class App {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.setupRoutes();
    }

    setupRoutes() {
        // Define the GET route
        this.app.get('/COMP4537/labs/3/getDate/', (req, res) => {
            const name = req.query.name || 'Guest'; // Get the name from query parameters
            const currentTime = getDate(); // Get the current server time using the utility function
            // Prepare the response message
            const message = `<div style="color: blue;">${messages.greeting.replace('%name', name).replace('%time', currentTime)}</div>`;
            // Send the response
            res.send(message);
        });
    }

    start() {
        // Start the server
        this.app.listen(this.port, () => {
            console.log(`Server is running at http://localhost:${this.port}`);
        });
    }
}

// Create an instance of the App class and start the server
const appInstance = new App();
appInstance.start();
