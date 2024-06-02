/* 
TODO:
The os.cpus() method is an inbuilt application programming interface of the os module which is used to get information about each logical CPU core of the computer. 

Syntax:

os.cpus()
Parameters: This method does not accept any parameters. 

Return: This method returns an object containing information about each logical CPU core. Each of the returned objects will contain the following attributes:

model: A string that specifies the model of the CPU core.
speed: A number that specifies the speed of the CPU core (in MHz).
times: An Object that contains the following properties:
user: A number specifies the time that the CPU has spent in user mode in milliseconds.
nice: A number specifies the time that the CPU has spent in nice mode in milliseconds.
sys: A number specifies the time that the CPU has spent in sys mode in milliseconds.
idle: A number specifies the time that the CPU has spent in idle mode in milliseconds.
irq: A number specifies the time that the CPU has spent in irq mode in milliseconds.
*/

const os = require('os')

console.log('CPU Core Information: ', os.cpus());