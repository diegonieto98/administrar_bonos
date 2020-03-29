var product = [
	{id: 1, name: 'prod name 1'},
	{id: 2, name: 'prod name 2'},
];

var  coupon =[
	{
		id: 1, //number
		name: 'coupon name', // string
		description: 'coupon description', // string
		product_id: 1,  // number (product id)
		valid_since: '2020-02-25T00:00:00.000', // string datetime ISO8601 format
		valid_until: '2020-02-25T23:59:00.999', // string datetime ISO8601 format
	},
	{
		id: 2, //number
		name: 'coupon name 2', // string
		description: 'coupon description 2', // string
		product_id: 2,  // number (product id)
		valid_since: '2020-02-25 T00:00:00.000', // string datetime ISO8601 format
		valid_until: '2020-02-25 T23:59:00.999', // string datetime ISO8601 format
	}

];

var detailsC =[	
{
	id: 1, //number
	name: 'coupon name', // string
	description: 'coupon description', // string
	product_id: 1,  // number (product id)
},
{
	id: 2, //number
	name: 'coupon name 2', // string
	description: 'coupon description 2', // string
	product_id: 2,  // number (product id)
}
];
 
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
		product:  product
	});
};

const detailsCoupons = (req, res, next) => {
	res.render('details-coupons', {
		detailsC
	});
};


const addProduct = (req, res) => {

	const newname = req.body.newname;

	product.push({
		id: product.length + 1,
		name: newname
	});
	res.render('newproduct',{
		product : product
	})

	res.redirect('/');
};

const validarCoupon = (req, res) => {
	res.render('validarCoupon', {
	});
};

const addCoupon = (req, res, next) => {
	var newName = req.body.newName;
	var newDescription = req.body.newDescription;
	var newId = req.body.newId;

	coupon.push = {
		id : coupon.length + 1,
		name : newName,
		description : newDescription,
		product_id: newId, 
		validsince: new Date() ,// string datetime ISO8601 format
		validuntil: '2021-02-02 T23:59:00.999' // string datetime ISO8601 format
	}
	res.render('newcoupons', {
		coupon 
	});

	res.redirect('/newc');
};

const viewCoupon = (req,res,next) => {
	res.render('newc', {
		coupon 
	});
}

const findproduct = (req,res,next) => {
	const productid = req.body.productid;

	res.render('findproduct'),{
		product : product
	}
}

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
  findproduct
};
