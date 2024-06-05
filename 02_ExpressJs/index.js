const express = require('express')

const app = express();

const PORT = 8080
const HOSTNAME = 'localhost'

app.get('/', (req, res) => {
	res.send('<h1> Hi Sandhya Baby! </h1>')
})

app.listen(PORT, () => {
	console.log(` Server is running on Port ${HOSTNAME}:${PORT}`);
})
