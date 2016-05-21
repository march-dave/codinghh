'use strict';

var express = require('express');
var request = require("request");
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {

  var options = { method: 'POST',
    url: 'https://api.projectoxford.ai/face/v1.0/detect',
    headers:
     {
       'cache-control': 'no-cache',
       'content-type': 'application/json',
       'ocp-apim-subscription-key': 'ed006ae07147429fbe61422aa0c0b476' },
    body: { url: 'https://avatars.slack-edge.com/2015-10-26/13273420229_f4c6c019a05e6e880054_512.jpg' },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

  res.send('respond with a resource');

});

module.exports = router;
