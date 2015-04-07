var express = require('express');
var bcrypt = require('bcrypt-nodejs');



var router = express.Router();

/******************************LOGIN IN LOCAL****************************/

router.get('/',function(req,res){
    res.render('index.ejs');
});

/**********************************************************************/

/******************************LOGIN IN LOCAL****************************/


router.get('/login',function(req,res){
   res.render('login.ejs');
});

router.post('/login',function(req,res){
   var email = req.body.useremail;
   var password = req.body.password;
   var db = req.db;
   var userCollection = db.get("user");


   password = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
   console.log(password);
   
   userCollection.find({email: email},{password: password},function(err,theUser){
    if(err)
        res.send(err);
    if(!theUser)
        res.send('0');
    res.send(theUser);
   });
   
   
});


/**********************************************************************/





/*********************************TEST*********************************/

router.get('/test',function(req,res){
    res.render('testview.ejs');
});


/***************************************************/

module.exports = router;
