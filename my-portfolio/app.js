const express = require('express');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');

// Create express app
const app = express();

// run 'public' folder
app.use(express.static('public'));

// test get request
app.get('/test', (req, res) => {
	res.send('<h1>Hello World</h1>');
})

// listen to port
app.listen(PORT, () => {
	console.log('Listening on port 8000');
})
