var sys = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { console.log(stdout) }
exec("bash submodules.sh", puts);