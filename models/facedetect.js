'use strict';

var mongoose = require('mongoose');

var facedetectSchema = new mongoose.Schema({
    faceId: {type: String}
    ,faceRectangle: {type: Object}
});

// facedetectSchema.static.save = function(fdObj, cb) {
// facedetectSchema.statics.save = function(fdObj, cb) {
//
//     console.log('save()');
//     var facedetect = new Facedetect({
//         // faceId: fdObj.faceId
//         faceRectangle: fdObj.faceRectangle
//     });
//
//     facedetect.save(cb);
// }

facedetectSchema.statics.update = (id, fdObj, cb) => {

      Facedetect.findByIdAndUpdate(id, {$set: fdObj}, (err, facedetect) => {

        if (err) return res.status(400).send(err);

        facedetect.save((err, saveFacedetect) => {
          if(err)cb (err);

          cb(null, saveFacedetect);
        });
    });
}

var Facedetect = mongoose.model('Facedetect', facedetectSchema);
module.exports = Facedetect;
