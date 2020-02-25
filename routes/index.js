var express = require('express');
var router = express.Router();
var axios = require('axios');
var {stats}=require('../data');
var Player=require('../Schema/playerSchema');

/* GET home page. */

function pushDb(){
  Player.insertMany(stats, (e)=>{
    if(!e) return console.log('done');
  console.log(e);
  })
}

router.get('/players', function(req, res, next) {
  // pushDb()
  Player.find().then(players=>res.json(players)).catch(e=>res.send(e));
});

module.exports = router;
