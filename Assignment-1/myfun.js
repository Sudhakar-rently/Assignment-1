
const logger=require("./logger");

logger("This is the message");

const path=require("path");

var pathObj=path.parse(__filename);

console.log(pathObj);


const os=require('os');

var totalmemory=os.totalmem();
var freememory=os.freemem();

//console.log("Total memory : "+totalmemory);
//console.log("Free memory : "+freememory);


console.log(`Total Memory : ${totalmemory}`);
console.log(`Free Memory : ${freememory}`);