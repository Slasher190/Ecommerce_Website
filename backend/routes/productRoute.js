const express = require("express");
//Getting all prodeucts detail
const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails} = require("../controller/productController");
const router = express.Router();

router.route('/products').get(getAllProducts);

router.route('/product/new').post(createProduct);

router.route('/product/:id').put(updateProduct).delete(deleteProduct).get(getProductDetails); //we can use like this if both have same url but have a different method
module.exports = router;