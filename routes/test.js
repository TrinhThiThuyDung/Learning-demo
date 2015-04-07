var express = require('express');

var router = express.Router();

var app= express();
var router = express.Router();

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});


router.get('/test',function(req,res,next){
	console.log(req.app.get("views"));
	res.send("test");
});


app.route('/testnext',function(req,res,next){
	res.send("Test");
});
module.exports = router;
