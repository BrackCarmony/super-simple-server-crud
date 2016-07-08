var Product = require('../models/productModel');

module.exports = {
    testEndpoint:function(req, res, next){
      console.log("We were hit");
      res.send("Isn't this awesome");

    },
    list:function(req, res){
      Product.find({}).exec(function(err, response){
        if (err){
          console.error(err);
          res.status(500).send(err);
        }else{
          console.log(response);
          res.send(response);
        }
      });
    },
    read:function(req, res){
      Product.findById(req.params.id).exec(function(err, response){
        if (err){
          console.error(err);
          res.status(500).send(err);
        }else{
          console.log(response);
          res.send(response);
        }
      });
    },
    create:function(req, res){
      console.log(req.body);
      Product.create(req.body, function(err, response){
        if (err){
          console.error(err);
          res.status(500).send(err);
        }else{
          console.log(response);
          res.send(response);
        }
      })
    },
    update:function(req, res){
      Product.findByIdAndUpdate(req.params.id,req.body, function(err, response){
        if (err){
          console.error(err);
          res.status(500).send(err);
        }else{
          console.log(response);
          res.send(response);
        }
      })
    },
    destroy:function(req, res){
      Product.findByIdAndRemove(req.params.id, function(err, response){
        if (err){
          console.error(err);
          res.status(500).send(err);
        }else{
          console.log(response);
          res.send(response);
        }
      })
    },
}
