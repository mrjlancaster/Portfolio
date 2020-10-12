const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Create express app
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// listen to port
app.listen(PORT, () => {
	console.log('Listening on port 3000');
})
