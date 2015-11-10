var exec = require('child_process').exec;

var queryString = require('querystring');

var fs = require('fs');

var formidable = require('formidable');



function start(res,req){
	console.log('Handling request for start');

		var body = '<html><head><meta http-equiv="Content-Type"'+
		' content="text/html; charset=UTF-8" /> </head>'+
		'<body><form action="/upload" enctype="multipart/form-data" method="post">'+
		'<input type="file" name="upload" />'+
		'<input type="submit" value="Upload Image" /></form></body></html>';

	res.writeHead(200,{'Content-Type' : 'text/html'});
	res.write(body);
	res.end();

}

function upload(res,req){
	console.log('Handling request for upload');

	var form  = new formidable.IncomingForm();
	console.log('parse stage');
	form.parse(req,function(err,fields,files){
		console.log('Parse complete.');
		fs.rename(files.upload.path,'./pic.jpg',function(err){
			if(err){
				fs.unlink('./pic.jpg');
				console.log(err);
				fs.rename(files.upload.path,'./pic.jpg');
			}
		});
	});

	res.writeHead(200,{"Content-Type" : "text/html"});
	res.write('Received image: <br> <img src="/show" />');
	res.end();
	console.log('Handled upload request!');
}


function show(res,postData){
	console.log('Requested postData');

	fs.readFile('./pic.jpg',"binary", function(err,file){
		if(err){
			res.writeHead(200, {'Content-Type' : 'text/plain'});
			res.write(err+'\n');
			res.end();
		}
		else{
			res.writeHead(200, {'Content-Type': 'image/jpg'});
			res.write(file,"binary");
			res.end();
		}
	});
}


exports.start = start;
exports.show = show;
exports.upload = upload;
