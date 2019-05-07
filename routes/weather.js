var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:time/:point', function(req, res, next) {
    let time = req.params.time;
    let latLong = req.params.point;
    request({
        uri: 'https://api.darksky.net/forecast/ada092dc5c4e6a87e88837f9970fed34/'+ latLong+','+time,
      }).pipe(res);
});

module.exports = router;
