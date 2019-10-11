const cp = require("child_process");

cp.exec("notepad",function(err,stdout,stderr){
    console.log(err);
    console.log(stdout);
    console.log(stderr);
})