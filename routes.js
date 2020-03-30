const express = require('express');
const router = express.Router();

const indexControles = require('./controles.js');

router.get('/', indexControles.index);

router.get('/products', indexControles.getProducts);

router.get('/details-products', indexControles.detailsProducts);

router.post('/details-products/findproduct', indexControles.findproduct);

router.get('/newproduct', indexControles.addProduct);

router.post('/newproduct/newp', indexControles.viewProduct);

router.get('/newcoupons', indexControles.addCoupon);

router.post('/newcoupons/newc', indexControles.viewCoupon);

router.get('/coupons', indexControles.getCoupons);

router.get('/details-coupons', indexControles.detailsCoupons);

router.post('/details-coupons/findcoupon', indexControles.findcoupon);

router.get('/validarCoupon', indexControles.validarCoupon);

router.post('/validarCoupon/vcoupon', indexControles.vcoupon);

module.exports = router;