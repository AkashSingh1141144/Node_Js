/* 
TODO:
ChatGPT
Operating system endianness refers to the order in which bytes are stored in memory. There are two common types of endianness:

Big-endian: In this scheme, the most significant byte (the "big end") of a word is stored at the lowest memory address, while the least significant byte (the "little end") is stored at the highest memory address.

Little-endian: Here, the least significant byte is stored at the lowest memory address, and the most significant byte at the highest memory address.

In the Node.js os module, there isn't a direct method to retrieve the endianness of the operating system. However, you can determine the endianness of the CPU architecture using the os.endianness() method. This method returns either 'BE' (big-endian) or 'LE' (little-endian). 
*/

const os = require('os');

console.log('Os endianness: ', os.endianness());