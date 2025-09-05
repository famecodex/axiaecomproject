const express = require("express");
const { protect, admin } = require("../middlewares/authMiddleware");
const { createProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/productController");

const router = express.Router();

router.post("/", protect, admin, createProduct);
router.get("/", getProducts);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;
