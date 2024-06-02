/*
TODO:

RELEASE

The os.release() method is an inbuilt application programming interface of the os module which is used to get Operating system release.

Syntax: 

os.release()
Parameters: This method does not accept any parameters.
Return Value: This method returns a string that represents operating system release. 
*/

const os = require('os');

const release = os.release();

console.log('Release: ' + release);