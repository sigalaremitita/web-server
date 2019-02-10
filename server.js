var express= require('express');
var app= express();
var PORT=process.env.PORT || 2000;

var midleware=require('./middleware.js');
app.use(midleware.loger);
app.get('/',function(rq,res){
   res.send("index");
});

 app.get('/hello',midleware.requireA, function(req,res){
    res.send("welcome !");
});

app.use(express.static(__dirname+'/public'));
app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
});