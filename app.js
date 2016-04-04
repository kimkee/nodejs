var express = require('express');
var app = express();
var favicon = require('serve-favicon');
app.locals.pretty = true;
//app.set('view engine', 'jade');
app.set('view engine', 'ejs');
app.set('views', './views');
//app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public')); //img/css등의 루트파일
app.use(favicon(__dirname + '/public/img/favicon.ico'));
//app.get('/template', function(req,res){
//	res.render('temp', {time:Date(), title:'Jade'});
//});
app.get(['/','/:id'], function(req,res){
	var opt = {
		time:Date(),
		title:'Node.js',
		contents:'page_home',
		photo:'1',
		active:'1', 
		gact:''
	};
	var id = req.params.id;
	var photo = req.query.photo;
	if(id){
		opt.contents = 'page_'+id;
		opt.gact = id;
	}
	if(photo){
		opt.photo = photo;
	}
	console.log(id);
	res.render('index', opt);
});

// app.get('/:id', function(req,res){
// });

// app.get('/topic',function(req,res){
// 	res.send(req.query.id);
// });

// app.get('/topic/:id',function(req,res){
// 	res.send(req.params.id);
// });


app.get('/hello', function(req,res){
	res.send('<h1>Hello Nodejs - ㅋㅋㅋ </h1>');
});
app.get('/dynamic', function(req,res){
	var lis = '';
	for(var i=0; i<5; i++){
		lis = lis + '<li>Cdddoding</li>';
	}
	var time = Date();
	var output =
	'<!DOCTYPE html>'+
	'<html>'+
	'<head><title></title></head>'+
	'<body>'+
		'Hello,Static!'+
		'<ul>'+lis+'</ul>'+
		'<div>time</div>' +
	'</body>'+
	'</html>';
	res.send(output);
});
app.get('/route', function(req,res){
	res.send('Hello Router,<img src="/route.png">');
});
app.get('/login', function(req,res){
	res.send('<h1>로그인 해주셈.</h1>');
});
app.listen(3000,function(){
	console.log('Conneted 3000 port!');
});
