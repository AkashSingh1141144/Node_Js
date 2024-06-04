const { error } = require("console");
const http = require("http");

const PORT = 8080;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  // Home page

  // About page

  // Contact page

  // Product page

  // Rest ..

  if (req.url === "/") {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hi Sandhya Baby')
  } else if (req.url === "/about") {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain')
	res.end('Know about Sandhya ')
  } else if (req.url === "/contact") {
	res.statusCode = 500;
	res.setHeader('Content-Type', 'application/json')
	res.end((e) => {
		console.log('Error in contact ', e);
	})
  } else if (req.url === "/product") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ productName: "Product 1" }));
  } else {
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});
