const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;

// Create express app
const app = express();

// run 'public' folder
app.use(express.static(path.join(__dirname, 'my-portfolio/public')));

// test get request
app.get('/api/list', (req, res) => {
	let list = ['item1', 'item2', 'item3'];
	res.json(list);
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + 'my-portfolio/public/index.html'));
})

// listen to port
app.listen(PORT, () => {
	console.log('Listening on port 8000');
})
