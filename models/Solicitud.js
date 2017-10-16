//models/Solicitud.js
var mongoose = require("mongoose");

var solicitudSchema = mongoose.Schema({
 título:{type:String, required:true, unique:true},
 autor:{type:String},
 año:{type:String}
});

var Solicitud = mongoose.model("solicitud", solicitudSchema); //5

module.exports = Solicitud;
