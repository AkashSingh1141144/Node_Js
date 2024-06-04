const http = require('http')

const PORT = 8000;
const HOSTNAME = 'localhost'
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Contenty-type', 'text/plain')
	res.end('Server created by Sandhya Singh')
})

server.listen(PORT, () => {
	console.log(`Server is running on ${HOSTNAME}:${PORT}`)
})
