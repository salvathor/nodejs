const util = require('./util.js');
util.print('hola');
util.print(module);

// require, exports, module, __filename and __dirname are part from MODULE WRAPPER FUNCTION
util.print(__filename);
util.print(__dirname);

/// Using Path module from NodeJS
const path = require('path');
var pathObj = path.parse(__filename)
console.log(pathObj);

/// Using OS module from NodeJS
const os = require('os');
var totalMemory = os.totalmem()
var freeMemory = os.freemem()

//console.log('Total Memory: '+totalMemory);

// Template script
// ES6 / ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

/// File System Module from NodeJS

const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./okas',null,function (err,files){
    if (err) console.log('Error', err);
    else console.log('Result',files);
});