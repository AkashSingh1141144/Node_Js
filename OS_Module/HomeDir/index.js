/*
TODO:
Home directory

The os.homedir() method is an inbuilt application programming interface of the os module which is used to get path of the home directory for the current user.

Syntax:

os.homedir()
Parameters: This method does not accept any parameters.

Return Value: This method returns a string specifies the path of the home directory for the current user.

On windows, It collects its value from an environment variable called USERPROFILE if defined. Otherwise, it returns the path to the profile directory for the current user.
On POSIX, It collects its value from an environment variable called $HOME if defined. Otherwise, it returns the home directory for some effective UID.
*/

const os = require('os')

console.log('Os Home Directory: ', os.homedir());
