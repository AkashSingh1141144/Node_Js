/*
TODO:

TOTAL MEMORY

The os.totalmem() method is an inbuilt application programming interface of the os module which is used to get the amount of total system memory in bytes. 

Syntax:

os.totalmem()
Parameters: This method does not accept any parameters. 

Return Value: This method returns an integer value that specifies the amount of total system memory in bytes. 
*/

const os = require('os');

const totalMemory = os.totalmem();

console.log('Total Memory: ' + totalMemory);