'use strict';

var express = require('express');
var request = require("request");
var router = express.Router();

var Facedetect = require('../models/facedetect');

var apiUrl = 'https://api.projectoxford.ai/face/v1.0/detect';

router.get('/:id', (req, res) => {

  Facedetect.findById(req.params.id, (err, facedetects) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(facedetects);
    }
  });
});

router.delete('/:id', (req, res) => {
  Facedetect.findByIdAndRemove(req.params.id, (err, facedetects) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send();
    }
  });
});

router.put('/:id', (req, res) => {

  var bodyObj = {

    faceId: req.body.faceId,

      faceRectangle: {
        top: req.body.top,
        left: req.body.left,
        width: req.body.width,
        height: req.body.height
      }
  };

  Facedetect.update(req.params.id, bodyObj, (err, result) => {
    if(err) throw new Error(err)

    res.send(result);
  });
});

router.route('/')
    .get((req, res) => {

      var request = require("request");

      var options = {
        method: 'GET',
        url: apiUrl,
        headers: {
           'cache-control': 'no-cache',
           'ocp-apim-subscription-key': process.env.OCP_APIM_SUBSCRIPTION_KEY
          }
        };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);
      });

      Facedetect.find({}, (err, faces) => {
        if(err) {
          res.status(400).send(err);
        } else {
          res.send(faces);
        }
        console.log('faces: ', faces);
      })
    })
    .post((req, res) => {

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

      request(options, function (err, response, body) {
        if(err) {
          throw new Error(err);
        } else {

          var facedetect = new Facedetect(body[0]);

          facedetect.save( (err, facedetect) => {
            // console.log('var facedetect:', facedetect);
          });
        }
      });

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
