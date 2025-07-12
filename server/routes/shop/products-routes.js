const express = require("express");
const { getFilteredProducts, getProductDetails } = require("../../controllers/shop/products-controller");
const { getBestSellers, getBestProducts } = require("../../controllers/shop/homeController"); // Thêm import

const router = express.Router();

router.get("/get", getFilteredProducts);
router.get("/get/:id", getProductDetails);
router.get("/best-sellers", getBestSellers); // Route mới
router.get("/best-products", getBestProducts); // Route mới

module.exports = router;
