'use strict';

var express = require('express');
var request = require("request");
var router = express.Router();

/* GET users listing. */
// router.post('/', function(req, res, next) {
//
//   var options = { method: 'POST',
//     url: 'https://api.projectoxford.ai/face/v1.0/detect',
//     headers:
//      {
//        'cache-control': 'no-cache',
//        'content-type': 'application/json',
//        'ocp-apim-subscription-key': 'ed006ae07147429fbe61422aa0c0b476' },
//     body: { url: 'https://avatars.slack-edge.com/2015-10-26/13273420229_f4c6c019a05e6e880054_512.jpg' },
//     json: true };
//
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//
//     console.log(body);
//   });
//
//   res.send('respond with a resource');
//
// });

var apiUrl = 'https://api.projectoxford.ai/face/v1.0/detect';

router.route('/')
    .get((req, res) => {
    //   Palbum.find({}, (err, bids) => {
    //       if(err) {
    //         res.status(400).send(err);
    //       } else {
    //         res.send(bids);
    //       }
    //     });
    })
    .post((req, res) => {
      // var palbum = new Palbum(req.body);
      // palbum.save((err, savedPalbum) => {
      //   res.status(err ? 400 : 200).send(err || savedPalbum);
      // });

      // 'https://avatars.slack-edge.com/2015-10-26/13273420229_f4c6c019a05e6e880054_512.jpg'
      var options = {
        method: 'POST',
        url: apiUrl,
        headers: {
           'cache-control': 'no-cache',
           'content-type': 'application/json',
           'ocp-apim-subscription-key': process.env.OCP_APIM_SUBSCRIPTION_KEY
        },
        body: {
            url: req.body.url
        },  json: true
      };

      // console.log('req.body: ', req.body);
      console.log('req.body: ', req.body.url);

      // request(options, function (error, response, body) {
      //
      // if (error) throw new Error(error);
      //
      //   console.log(body);
      //
      // });

      res.send('respond with a resource');

  });

  // router.put('/:id', (req, res) => {
  //   Palbum.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, palbum) => {
  //     if(err) {
  //       res.status(400).send(err);
  //     } else {
  //       res.send();
  //     }
  //   });
  // });
  //
  // router.delete('/:id', (req, res) => {
  //   Palbum.findByIdAndRemove(req.params.id, (err, palbum) => {
  //     if(err) {
  //       res.status(400).send(err);
  //     } else {
  //       res.send();
  //     }
  //   });
  // });

module.exports = router;
