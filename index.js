const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;

// Create express app
const app = express();

// run 'public' folder
app.use(express.static(path.join(__dirname, 'my-portfolio', 'public')));

// test get request
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'my-portfolio', 'index.html'));
})

// listen to port
app.listen(PORT, () => {
	console.log('Listening on port 8000');
})
