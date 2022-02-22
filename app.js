const util = require('./util.js');
util.print('hola');
util.print(module);

// require, exports, module, __filename and __dirname are part from MODULE WRAPPER FUNCTION
util.print(__filename);
util.print(__dirname);