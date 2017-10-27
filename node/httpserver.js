/**
 * Created by Yz on 2017/10/25.
 */
var http = require('http');

var server = new http.Server();
server.on('request',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
});
server.listen(3000);
console.log('Http SERVER IS LISTENING AT PORT 3000.')