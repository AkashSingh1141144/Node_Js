const fs = require('fs');

fs.writeFile('input.txt', 'whatsapp re sandhya', (err) => {
	if (err) {
		console.log('Error in writing file', err);
		return err;
	} else {
		console.log('File written successfully');
	}

	fs.unlink('input.txt', (err) => { 
		if (err) {
			console.log('Error in deleting file', err);
			return err;
		} else {
		    console.log('File deleted successfully');
		}
	})
})