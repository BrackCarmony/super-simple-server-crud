var mongoose = require('mongoose');

// var ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  name:{type:String, required:true},
  price:{type:Number, required:true},
  qty:Number,
  size:String,
  description:String,
  pictureUrl:{type:String, default:"/images/placeholderimage.png"}
});

module.exports = mongoose.model('Product', schema);
