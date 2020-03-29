const express = require('express');
const router = express.Router();

const indexController = require('./controles/index.js');

router.get('/', indexController.index);

router.get('/products', indexController.getProducts);

router.post('/new-product', indexController.addProduct);

router.get('/coupons', indexController.getCoupons);

router.post('/new-coupons', indexController.addcoupons);

module.exports = router;