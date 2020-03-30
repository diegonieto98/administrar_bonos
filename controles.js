const databaseP = require ('./database/databaseP');
const databaseC = require ('./database/databaseC');

var product = databaseP;
var coupon = databaseC;
var indicesP=0;
var indicesC=0;

const index = (req,res,next) => {
	indicesP=0;
	indicesC=0;
	res.render('index',{
		indicesP : indicesP,
		indicesC : indicesC
	});
};

const getProducts = (req, res, next) => {
	res.render('products', {
		product : product
	});
};

const getCoupons = (req, res, next) => {
	res.render('coupons', {
		coupon : coupon
	});
};

const detailsProducts = (req, res, next) => {
	res.render('details-products', {
		product : product,
		indicesP : indicesP
	});
	
};

const detailsCoupons = (req, res) => {
	var coupond = coupon[4,{}];
	console.log(coupond);
	res.render('details-coupons', {
		coupond : coupond,
		coupon : coupon,
		indicesC : indicesC
	});
};


const addProduct = (req, res) => {
	res.render('newproduct',{
		product : product
	});
};

const addCoupon = (req, res) => {

	res.render('newcoupons', {
		coupon : coupon
	});
};

const validarCoupon = (req, res) => {
	res.render('validarCoupon', {
	});
};

const vcoupon =(req,res) => {
	res.redirect('/validarCoupon');
};

function sumarDias(fecha, dias){
	fecha.setDate(fecha.getDate() + dias);
	return fecha;
  }

const viewCoupon = (req,res) => {

	const newName = req.body.newName;
    const newDescription = req.body.newDescription;
	const newId = req.body.newId;
	var newSince = new Date();
	var newUntil = sumarDias(newSince, +10);

	coupon.push({
		id : coupon.length + 1,
		name : newName,
		description : newDescription,
		product_id : newId,
		valid_since: newSince,
		valid_until : newUntil 
	});

	res.redirect('/newcoupons')
};

const viewProduct = (req,res) => {
	const newname = req.body.newname;
	console.log(newname);
	product.push({
		id : product.length + 1,
		name : newname
	});

	res.redirect('/newproduct');
};

const findproduct = (req,res) => {

	const productid2 = req.body.productid2;
	console.log(productid2);
	indicesP = productid2;
	console.log(indicesP);

	res.redirect('/details-products');

};

const findcoupon = (req,res) => {
	const productid1 = String(req.body.productid1);
	var coupond = req.coupond;
	var idx = coupond.indexOf(productid1);
	console.log(idx);
	while (idx != -1){
		indicesC.push(idx);
		idx = coupond.indexOf(productid1, idex + 1)
	}
	console.log(indicesC);
	res.redirect('/details-coupons');
};

module.exports = {
  index,
  getProducts,
  addProduct,
  getCoupons,
  addCoupon,
  detailsProducts,
  detailsCoupons,
  validarCoupon,
  viewCoupon,
  findproduct,
  findcoupon,
  viewProduct,
  vcoupon
};
