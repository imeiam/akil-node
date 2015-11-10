var http = require('http');

var url  = require('url');

var start = function(route,handle){
	var port = process.env.PORT || 8080;

	http.createServer(function(req,res){

		var pathName = url.parse(req.url).pathname;
		console.log('Server: Request for  '+pathName);
		route(handle,pathName,res,req);
	}).listen(port,"0.0.0.0");

	console.log('Server listening on port: '+port+'\n');

}

exports.start = start;
