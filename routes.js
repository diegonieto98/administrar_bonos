const express = require('express');
const Router = express.Router();

const indexControles = require('./controles.js');

Router.get('/', indexControles.index);

Router.get('/products', indexControles.getProducts);

Router.post('/new-product', indexControles.addProduct);

Router.get('/coupons', indexControles.getCoupons);

Router.post('/new-coupons', indexControles.addcoupons);

module.exports = router;