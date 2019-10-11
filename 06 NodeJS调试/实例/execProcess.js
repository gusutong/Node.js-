const cp = require("child_process");

cp.exec("node childProcess.js",function(err,stdout,stderr){
    if(err){
        console.log(err);
    }else{
        console.log(stdout);
        console.log(stderr);
    }
})