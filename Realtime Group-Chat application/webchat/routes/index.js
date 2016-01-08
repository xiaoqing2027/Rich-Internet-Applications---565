
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Please enter your username." });
});

/*
router.post('/', function (req, res) {

   var username = req.body.username;
   var button = req.body.thumb;
   res.render('message', { 
      'username': username
   });

   console.log(req.body.login);
   //console.log(req.query.lang);

});

*/


module.exports = router;

