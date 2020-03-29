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

const index = (req, res, next) => {
	res.render('index', {
		title: 'Aplicacion para administrar bonos'
	});
};

const getProducts = (req, res, next) => {
	res.render('products', {
		title: 'List of Products',
		product
	});
};

const getCoupons = (req, res, next) => {
	res.render('coupons', {
		title: 'List of Coupons',
		coupon
	});
};

const addProduct = (req, res) => {

	var newItem = req.body.newItem;
	console.log(newItem);

	product.push({
		id: product.length + 1,
		name: newItem
	});

	res.redirect('/products');
};

const addCoupon = (req, res) => {

	var newItem = req.body.newItem;
	console.log(newItem);

	coupon.push({
		id: coupon.length + 1,
		name: newItem,
		description : newItem ,// string
		product_id: product.length , // number (product id)
		validsince: '2020-02-25 T00:00:00.000' ,// string datetime ISO8601 format
		validuntil: '2020-02-25 T23:59:00.999' // string datetime ISO8601 format
	});

	res.redirect('/coupons');
};

module.exports = {
  index,
  getProducts,
  addProduct,
  getCoupons,
  addCoupon
};
