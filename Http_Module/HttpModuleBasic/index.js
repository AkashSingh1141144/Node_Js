const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('<h1>Sandhya Singh </h1>');
	} else if (req.url === '/about') {
		res.write('<h1>I Love You !</h1>');
	} else if (req.url === '/contact') {
		res.write('<h1>7784841xxx</h1>');
	}
	res.end();
});

server.listen(8000);

console.log('Server is running on port 8000');