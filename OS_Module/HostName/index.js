/*
TODO:

HOSTNAME
The os.hostname() method is an inbuilt application programming interface of the os module which is used to get host name of the operating system.

Syntax:

os.hostname()
Parameters: This method does not accept any parameters.

Return Value: This method returns a string value that specifies the host name of the operating system.
*/

const os = require('os')

const hostName = os.hostname();

console.log('Host Name: ' + hostName);