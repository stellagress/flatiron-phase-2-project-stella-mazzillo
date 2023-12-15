const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Rest of your server code
const jsonServer = require('json-server')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
app.use(middlewares);
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});