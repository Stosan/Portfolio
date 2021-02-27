var express = require('express');

var nodemailer = require("nodemailer");  
var router = express.Router();

//load nodemailer
var smtpTransport = nodemailer.createTransport({  
  service: "gmail",  
  host: "smtp.gmail.com",  
  auth: {  
      user: "ayosamuel92@gmail.com",  
      pass: "Rimama33"  
  }  
}); 

router.get(function() {  
  var mailOptions = {  
    to:"toemalid",  
    subject:"Email from nodemailer",  
    html:'<div>Name: '+ req.query.name +'</div><div>Email: '+ req.query.email +'</div><div>Mobile: '+ req.query.mobile +'</div><div>Message: '+ req.query.message +'</div>'  
}  
smtpTransport.sendMail(mailOptions, function(error, response) {  
 if(error) {  
    res.end("error");  
 } else {  
    res.end("sent");  
 }  
});

});  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});



});
/* GET project page. */
router.get('/project', function(req, res) {
  res.render('proj', {page:'Project', menuId:'Project'});

});

module.exports = router;
