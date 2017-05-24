function setRouter(app){ 
 var router = app; 

router.get('/loadMore', function(req, res) {
  var curIdx = req.query.index;
  var len =req.query.length;
  var data = [];
  for(var i = 0; i < len; i++) {
    data.push('item' + (parseInt(curIdx) + i))
  }
  res.send(data);
});}
 module.exports.setRouter = setRouter