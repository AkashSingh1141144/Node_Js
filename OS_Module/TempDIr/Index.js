/*
TODO:
The os.tmpdir() method returns a string representing the path to the system's temporary directory, which can be used for creating temporary files or storing temporary data during runtime. This directory is typically cleaned periodically by the operating system.
*/

const os = require('os')

const temporaryDirecorty = os.tmpdir();

console.log('Temporary Directory:', temporaryDirecorty);