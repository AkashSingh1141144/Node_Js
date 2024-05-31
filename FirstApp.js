const http = require('http');

// Create a server
http.createServer((req, res) => {
	// HTTP Status: 200 : OK
	// Content Type: text/html
	res.writeHead(200, {'Content-Type': 'text/html'});

	// Send the response body "Hello World!"
	res.end('Hello World!');

}).listen(8082)