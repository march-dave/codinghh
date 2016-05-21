'use strict';

var mongoose = require('mongoose');

var facedetectSchema = new mongoose.Schema({
    faceId: {type: String}
    // ,faceRectangle: {type: String}
});

var Facedetect = mongoose.model('Facedetect', facedetectSchema);
module.exports = Facedetect;
