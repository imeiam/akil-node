var server = require('./server/server');
var router = require('./server/router');

var requestHandler = require('./server/requesthandler');

var handle= {};
handle["/"] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload']=requestHandler.upload;
handle['/show'] = requestHandler.show;

server.start(router.route,handle);




/*
handle["/"]();
handle["/start"]();
handle["/upload"]();
*/

/*

	var body = '<html><head><meta http-equiv="Content-Type"'+
	' content="text/html; charset=UTF-8" /> </head>'+
	'<body><form action="/upload" enctype="multipart/form-data" method="post">'+
	'<input type="file" name="upload" />'+
	'<input type="submit" value="Upload Image" /></form></body></html>';
*/
