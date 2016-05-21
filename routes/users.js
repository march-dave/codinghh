var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// var request = require("request");
//
// var options = { method: 'POST',
//   url: 'https://api.projectoxford.ai/emotion/v1.0/recognize',
//   headers:
//    {
//      'cache-control': 'no-cache',
//      'content-type': 'application/json',
//      'ocp-apim-subscription-key': '51513fd4e6524796924db7fe9221848a' },
//   body: { url: 'https://projectoxfordportal.azureedge.net/emotion/recognition2-thumbnail.jpg' },
//   json: true };
//
// request(options, function (error, response, body) {
//   if (error) throw new Error(error);
//
//   console.log(body);
// });
