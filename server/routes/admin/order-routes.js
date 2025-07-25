const express = require("express");

const {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
  deleteOrder,
} = require("../../controllers/admin/order-controller");

const router = express.Router();

router.get("/get", getAllOrdersOfAllUsers);
router.get("/details/:id", getOrderDetailsForAdmin);
router.put("/update/:id", updateOrderStatus);
router.delete("/delete/:orderId", deleteOrder); // Sửa endpoint


module.exports = router;
