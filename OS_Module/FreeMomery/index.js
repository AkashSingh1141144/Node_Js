/* 
TODO:
The os.freemem() method is an inbuilt application programming interface of the os module which is used to get the amount of free system memory. 

Syntax:

os.freemem()
Parameters: This method does not accept any parameters. 

Return Value: This method returns an integer value that specifies the amount of free system memory in bytes. 
*/

const os = require('os');

console.log('Free memory: ', os.freemem());