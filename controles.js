const databaseP = require ('./databaseP');
const databaseC = require ('./databaseC');

var product = databaseP;
var coupon = databaseC;

const index = (req,res,next) => {
	res.render('index',{
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
	});
	
};

const detailsCoupons = (req, res, next) => {
	res.render('details-coupons', {
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
	const productid = req.body.productid;
	res.redirect('/details-products');
};

const findcoupon = (req,res) => {
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
