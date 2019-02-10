var express= require('express');
var app= express();

var midleware= {
    requireA: function(rq,res,next){
   console.log('private'); 
   next();
    },
loger:  function(req, res,next){
    var d= new Date();
console.log(req.method+' time: '+d);
next();
}
};
app.use(midleware.loger);
app.get('/',function(rq,res){
   res.send("index");
});

 app.get('/hello',midleware.requireA, function(req,res){
    res.send("welcome !");
});

app.use(express.static(__dirname+'/public'));
app.listen(2000);