/*
TODO:
NETWORK INTERFACES

The os.networkInterfaces() method is an inbuilt application programming interface of the os module which is used to get the information about network interfaces of the computer.

Syntax:

os.networkInterfaces()
Parameters: This method does not accept any parameters.

Return Value: This method returns an object containing information about each network interfaces. The returned object will contain the array of network interfaces which again consists of the following attributes:

address: A string that specifies the assigned network address i.e. IPv4 or IPv6/
netmask: A string that specifies the IPv4 or IPv6 network mask.
family: A string that specifies the Family, value is one of IPv4 or IPv6.
mac: A string that specifies the MAC address of the network interface.
internal: A boolean value, true if interface is loopback one, false otherwise.
scopeid: A number that specifies the scope ID for IPv6.
cidr: A string that specifies the assigned IPv4 or IPv6 address with the routing prefix in CIDR notation. It is set to null if netmask is invalid.
*/
 
const os = require('os');

const networkInterfaces = os.networkInterfaces();

console.log('Network Interfaces: ', networkInterfaces);