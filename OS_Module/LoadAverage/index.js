/*
TODO:
LOAD AVERAGE

The os.loadavg() method is an inbuilt application programming interface of the os module which is used to get the load average. Load average is a measure of system activity, expressed in a fractional number, calculated by the operating system. 

Syntax:

os.loadavg()
Parameters: This method does not accept any parameters.

Return Value: This method returns an array containing a fractional number of size three signifies 1, 5, and 15 minutes load average calculated by the operating system. On Windows, it will return [0, 0, 0] as the load average is a Unix-Specific concept. 
*/

const os = require('os');

const loadAverage = os.loadavg();

console.log('Load Average: ', loadAverage);