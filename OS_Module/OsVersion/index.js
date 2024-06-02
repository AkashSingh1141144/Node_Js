/*
TODO:

OS VERSION

The os.version() method is used to identify the version of the kernel of the Operating System. This information is determined by calling uname on POSIX systems and calling RtlGetVersion() or GetVersionExW() on Windows systems.

Syntax:

os.version()
Parameters: This function does not accept any parameters.

Return Value: It returns a string that identifies the kernel version.
*/

const os = require('os');

const osVersion = os.version();

console.log('Os Version: ', osVersion);