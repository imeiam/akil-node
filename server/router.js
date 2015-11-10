var route  = function(handle,pathname,res,req){
	console.log('Gonna route for pathname: '+pathname);

	if(typeof handle[pathname] === 'function'){
		handle[pathname](res,req);
	}
	else{
		console.log('No requestHandler Found for'+pathname);
		res.writeHead(200,{"Content-Type" : "text/html"});
		res.write("Error 404 Page not Found!");
		res.end();
	}
}

exports.route = route;
