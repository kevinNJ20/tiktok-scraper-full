const express = require('express');
const bodyParser = require('body-parser');
const telegramRoutes = require('./src/routes/tiktokRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the telegram routes
app.use('/api', telegramRoutes);

// Root route to verify server is running
app.get('/', (req, res) => {
    res.send('Telegram Subscriber API is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
