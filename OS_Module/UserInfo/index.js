/*
TODO:

USER INFORMATION

The os.userInfo() method is an inbuilt application programming interface of the os module which is used to get the information of currently effective user.

Syntax: 

os.userInfo( options )
Parameters: This method accepts single parameter options which is optional parameter. It specifies the process options to be passed, and an object which contains encoding as a parameter returns. 

encoding: It specifies the character encoding for returned data. If it is set to ‘buffer’, then username, shell, homedir values will be buffer instances. Default value is ‘utf8’.
Return Value: It returns an object that specifies the information about the current effective user, which contains username, uid, gid, shell, homedir like values.
*/

const os = require("os");

const userInformation = os.userInfo();

console.log("User Information: ", userInformation);

// console.log('user info', os.userInfo());
