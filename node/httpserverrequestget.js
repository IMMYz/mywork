/**
 * Created by Yz on 2017/10/25.
 */
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);