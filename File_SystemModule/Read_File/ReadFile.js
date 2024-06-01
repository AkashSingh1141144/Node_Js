const fs = require('fs');

fs.readFile('input.txt',  (err, data) => {
    if (err) {
		// console.log('Error:', err);
		return err;
	}
	// console.log('Asynchronous read:',  data.toString())
	return data;
})



// synchronous way to read file 

const data = fs.readFileSync('input.txt' )
console.log('Synchronous read:', data.toString());