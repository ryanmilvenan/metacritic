var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('../public/javascripts/keys')

router.get('/', function(req, res, next) {
    console.log(req)
    unirest.get("https://byroredux-metacritic.p.mashape.com/type-description/" + "game" +  "?retry=4")
   
    .header("X-Mashape-Key", "1t37z6ZtlvmshEIKo41r9f2yjIh1p14TpsnjsnnL0F5emFdSPa")
    .header("Accept", "application/json")
    .end(function (result) {
        res.render('common', {data: result});
        console.log(result.status, result.headers, result.body);
    });
});

var funs = {
    searchType: function (type) {
        router.get('/', function(req, res, next) {
        console.log(req)
        unirest.get("https://byroredux-metacritic.p.mashape.com/type-description/" + type +  "?retry=4")
   
        .header("X-Mashape-Key", "1t37z6ZtlvmshEIKo41r9f2yjIh1p14TpsnjsnnL0F5emFdSPa")
        .header("Accept", "application/json")
        .end(function (result) {
            res.render('common', {data: result});
            console.log(result.status, result.headers, result.body);
        });
    
        });
    }
}

module.exports = router;