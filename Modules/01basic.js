// Modul -->
/*
In Node.js, Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiple files/folders. The reason programmers are heavily reliant on modules is because of their reusability as well as the ability to break down a complex piece of code into manageable chunks. 

Modules are of three types:

Core Modules
local Modules
Third-party Modules..

*/

// Core Modules -->
/*
Core Modules: Node.js has many built-in modules that are part of the platform and come with Node.js installation. These modules can be loaded into the program by using the required function.

Core Modules -	Description
http -	creates an HTTP server in Node.js.
assert -	set of assertion functions useful for testing.
fs -	used to handle file system.
path -	includes methods to deal with file paths.
process	provides information and control about the current Node.js process.
os -	provides information about the operating system.
querystring	utility used for parsing and formatting URL query strings.
url	module provides utilities for URL resolution and parsing.
*/
example:

var http = require('http');

http.createServer((req, res) => {

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Sandhya Singh \n');
}).listen(8080, '127.0.0.1')



// local Modules -->
/*
Local Modules: Local modules are the modules that are created within the project. These modules are used to encapsulate the functionality of the application and are stored in the separate files.

To use a local module, you need to require it in the main application file.

*/

// Third-party Modules -->

/*
Third-party modules: Third-party modules are modules that are available online using the Node Package Manager(NPM). These modules can be installed in the project folder or globally. Some of the popular third-party modules are Mongoose, express, angular, and React. 

Example:

npm install express
npm install mongoose
npm install -g @angular/cli

*/