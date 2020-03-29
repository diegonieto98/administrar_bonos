const express = require('express');
const router = express.Router();

const indexControles = require('./controles.js');

router.get('/', indexControles.index);

router.get('/products', indexControles.getProducts);

router.get('/details-products', indexControles.detailsProducts);

router.get('/details-products/findproduct', indexControles.findproduct);

router.get('/newproduct', indexControles.addProduct);

router.get('/newproduct/newp', indexControles.viewProuduct);

router.get('/newcoupons', indexControles.addCoupon);

router.get('/newcoupons/newc', indexControles.viewCoupon);

router.get('/coupons', indexControles.getCoupons);

router.get('/details-coupons', indexControles.detailsCoupons);

router.get('/details-coupons/findcoupon', indexControles.findcoupon);

router.get('/validarCoupon', indexControles.validarCoupon);

router.get('/validarCoupon/vcoupon', indexControles.vcoupon);

module.exports = router;