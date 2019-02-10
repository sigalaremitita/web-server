var express= require('express');
var app= express();

var midleware=require('./middleware.js');
app.use(midleware.loger);
app.get('/',function(rq,res){
   res.send("index");
});

 app.get('/hello',midleware.requireA, function(req,res){
    res.send("welcome !");
});

app.use(express.static(__dirname+'/public'));
app.listen(2000);