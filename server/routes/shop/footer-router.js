// server/routes/footer-router.js

const express = require("express");
const {
    getReturnPolicy,
    getShippingPolicy,
    getWarrantyPolicy,
    getPaymentPolicy,
} = require("../../controllers/shop/footerController");

const router = express.Router();

router.get("/return-policy", getReturnPolicy);
router.get("/shipping-policy", getShippingPolicy);
router.get("/warranty-policy", getWarrantyPolicy);
router.get("/payment-policy", getPaymentPolicy);

module.exports = router;
