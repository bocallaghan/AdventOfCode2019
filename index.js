console.log("###############################################################");
console.log("Welcome to Advent of Code 2019 - " + module.filename.slice(__filename.lastIndexOf(require('path').sep)+1, module.filename.length));
console.log("This script will now work through each puzzle completed and output the answer");
console.log("###############################################################");

var step_1a = require('./1/1a.js');
step_1a.run();

var step_1b = require('./1/1b.js');
step_1b.run();