var express = require('express');
var bcrypt = require('bcrypt-nodejs');

var router = express.Router();



/******************************SIGNUP*****************************/

router.get('/signup',function(req,res){
	res.render('signup.ejs');
});

router.post('/signupSuccuess',function(req,res){

   var email = req.body.email;
   var password = req.body.password;

   password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    
    var db = req.db;
   var userCollection = db.get('user');
   userCollection.insert({email: email,password: password},function(err,doc){
   	if(err)
   		return err;
   //	res.location("userlist");
            // And forward to success pa
   	res.redirect("/login");

   });
   

});

/****************************************************************/

module.exports = router;
