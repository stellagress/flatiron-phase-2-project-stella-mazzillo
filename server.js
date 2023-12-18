const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

// Rest of your server code
const jsonServer = require('json-server')
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
// app.use(middlewares);
// app.use('/api', router);
app.use('/api', middlewares);
app.use('/api', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const jsonServer = require('json-server')

// const server = jsonServer.create()

// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
 
// server.use(middlewares)
// server.use('/api', router)
// server.listen(process.env.PORT || 5000, () => {
//   console.log('JSON Server is running')
// })