
var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {

   var username = req.body.username;
   
   res.render('message', { 
      'username': username
   });

   console.log(req.body.login);

});


module.exports = router;