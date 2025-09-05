const express = require("express");
const { protect, admin } = require("../middlewares/authMiddleware");
const { createOrder, getOrders, getAllOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.get("/all", protect, admin, getAllOrders);

module.exports = router;
