const express = require('express');
const router = express.Router();

const indexControles = require('./controles.js');

router.get('/', indexControles.index);

router.get('/products', indexControles.getProducts);

router.post('/new-product', indexControles.addProduct);

router.get('/coupons', indexControles.getCoupons);

router.post('/new-coupons', indexControles.addCoupon);

router.get('/details-product', indexControles.detailsProducts);

router.get('/details-coupon', indexControles.detailsCoupons);

module.exports = router;