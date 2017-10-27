/**
 * Created by Yz on 2017/10/25.
 */
var fs = require('fs');

fs.readFile('content.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})