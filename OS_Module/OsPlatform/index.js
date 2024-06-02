/*
TODO:
PLATFORM
The os.platform() method is an inbuilt application programming interface of the os module which is used to get the Operating system platform.

Syntax:  

os.platform()
Parameters: This method does not accept any parameters.

Return Value: This method returns a string that represents the operating system platform. The returned values can be one of these ‘aix’, ‘android’, ‘darwin’, ‘freebsd’, ‘linux’, ‘openbsd’, ‘sunos’, and ‘win32’. This value is set at compile time.
*/

const os = require('os');

const platform = os.platform();

console.log('Platform: ' + platform);