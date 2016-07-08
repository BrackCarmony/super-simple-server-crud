var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var productCtrl = require('./controllers/productCtrl');

app.use(bodyParser.json());
app.use(express.static(__dirname + '../public'));

var mongoUri = "mongodb://0.0.0.0:27017/ecommerce";
mongoose.connect(mongoUri);

app.get('/api/products', productCtrl.list);
app.get('/api/products/:id', productCtrl.read);
app.post('/api/products', productCtrl.create);
app.put('/api/products/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.destroy);


app.listen(8080, function(){
  console.log("Listening on port 8080");
})
