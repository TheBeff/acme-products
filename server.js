var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var swig = require('swig');
swig.setDefaults({ cache: false });
var Products = require('./products-model');

var app = express();
app.use(express.static( path.join( __dirname, 'node_modules')));

app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.get('/', function(req, res, next){
	res.render('home', { title: 'Home'});
});

app.get('/products', function(req, res, next){
	res.render('products', { title: 'Products', products: Products.getProducts()});
});

app.delete('/products/:id', function(req, res, next){
	Products.deleteItem(req.params.id*1);
	//res.render('products', { title: 'Products', products: Products.getProducts()});
	res.redirect('/products');
});

app.listen(3000, function(){
	console.log('listening');
});