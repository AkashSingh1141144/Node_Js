/*
TODO:

Up Time 

The os.uptime() method is an inbuilt application programming interface of the os module which is used to get system uptime in seconds. 

Syntax:

os.uptime()
Parameters: This method does not accept any parameters. 

Return Value: This method returns an integer value that specifies the number of seconds the system is running i.e. system uptime.
*/

const os = require('os');

const upTime = os.uptime();

console.log(`System uptime is ${upTime} seconds.`);


// Printing os.uptime() value
let ut_sec = os.uptime();
let ut_min = ut_sec / 60;
let ut_hour = ut_min / 60;
 
ut_sec = Math.floor(ut_sec);
ut_min = Math.floor(ut_min);
ut_hour = Math.floor(ut_hour);
 
ut_hour = ut_hour % 60;
ut_min = ut_min % 60;
ut_sec = ut_sec % 60;
 
console.log("Up time: "
    + ut_hour + " Hour(s) "
    + ut_min + " minute(s) and "
    + ut_sec + " second(s)");