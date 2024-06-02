/*
TODO:
The os.arch() method is an inbuilt application programming interface of the os module which is used to get CPU architecture of the computer for which the current node.js is compiled.

Syntax:

os.arch()
Parameters: This method does not accept any parameters.

Return Value: This method returns the operating system CPU architecture for which the current node.js is compiled for. Possible values are ‘x32’, ‘x64’, ‘arm’, ‘arm64’, ‘s390’, ‘s390x’, ‘mipsel’, ‘ia32’, ‘mips’, ‘ppc’ and ‘ppc64’.
*/

const os = require("os");

console.log("CPU Architecture:", os.arch());

switch (os.arch()) {
  case "x32":
    console.log("32-bit extended system");
    break;

  case "x64":
    console.log("64-bit extended system");
    break;

  case "arm":
    console.log("32-bit  Advanced RISC Machine");
    break;

  case "arm64":
    console.log("64-bit  Advanced RISC Machine");
    break;

  case "s390":
    console.log(
      "31-bit The IBM System/390, the" +
        " third generation of the System/360" +
        " instruction set architecture"
    );
    break;

  case "s390x":
    console.log(
      "64-bit The IBM System/390, the" +
        " third generation of the System/360" +
        " instruction set architecture"
    );
    break;

  case "mipsel":
    console.log(
      "64-bit Microprocessor without" + " Interlocked Pipelined Stages"
    );
    break;

  case "mips":
    console.log(
      "32-bit Microprocessor without" + " Interlocked Pipelined Stages"
    );
    break;

  case "ia32":
    console.log("32-bit Intel Architecture");
    break;

  case "ppc":
    console.log("PowerPC Architecture.");
    break;

  case "ppc64":
    console.log("64-bit PowerPC Architecture.");
    break;

  default:
    console.log(" unknown processor");
}
