/*
TODO:
The os.getPriority() method is an inbuilt application programming interface of the os module which is used to get the scheduling priority of the process specified by pid.

Syntax: 

os.getPriority( pid )


ChatGPT
In the Node.js os module, there isn't a method called getPriority(). However, in the os module, there's a method called os.getPriority([pid]), which retrieves the priority of a process.

Here's how it works:

If you call os.getPriority() without any arguments, it returns the priority of the current process.
If you pass a process ID (pid) as an argument, it returns the priority of the specified process.
The priority value returned is an integer that represents the scheduling priority of the process. This value can vary depending on the operating system and its configuration.
*/

const os = require('os');

console.log('Os getPriority:', os.getPriority());

// Get priority of the current process
const currentPriority = os.getPriority();
console.log('Priority of current process:', currentPriority);

// Get priority of a specific process (replace <pid> with the process ID)
// const specificPriority = os.getPriority(pid);
// console.log('Priority of specific process:', specificPriority);
