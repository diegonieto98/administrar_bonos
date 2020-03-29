const express = require('express');
const router = express.Router();

const indexControles = require('./controles.js');

router.get('/', indexControles.index);

router.get('/products', indexControles.getProducts);

router.get('/newcoupons', indexControles.addCoupon);

router.post('/newcoupons/newc', indexControles.viewCoupon);

router.post('/newproduct', indexControles.addProduct);

router.get('/coupons', indexControles.getCoupons);

router.get('/details-product', indexControles.detailsProducts);

router.get('details-product/findproduct', indexControles.findproduct);

router.get('/details-coupon', indexControles.detailsCoupons);

router.get('/validarCoupon', indexControles.validarCoupon);

module.exports = router;