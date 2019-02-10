
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
module.exports=midleware;