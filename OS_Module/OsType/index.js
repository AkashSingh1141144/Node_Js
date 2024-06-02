/*
TODO:

TYPE

The os.type() method is an inbuilt application programming interface of the os module which is used to get Operating system name.
Syntax:

os.type()
Parameters: This method does not accept any parameters.
Return Value: This method returns a string that represents operating system name. The returned value can be one of these ‘Darwin’ for MacOS, ‘Linux’ for Linux and ‘Windows_NT’ for windows.
Below examples illustrate the use of os.type() method in Node.js:
*/

const os = require("os");

const type = os.type();

console.log('Os Type: ' + type);