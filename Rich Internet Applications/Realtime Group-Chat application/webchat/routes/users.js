var express = require('express');
var router = express.Router();
var dbFile = require("../db");

/* GET users listing. */
router.get('/', function (req, res, next) {

  dbFile.find({}, function (err, docs) {
    var users = [];
    for (var i = 0; i < docs.length; i++) {
      var user = {};
      user["name"] = docs[i].user;
      user["id"] = docs[i].socket_id;
      user["joined_at"] = docs[i].joined_at;
      users.push(user);
    }
    res.render("users", {
      'users': users,
      'count': users.length});
  });

});

module.exports = router;
