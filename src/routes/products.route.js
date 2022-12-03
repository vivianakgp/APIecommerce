const { Router } = require("express");
const {
  createProduct,
  getProducts,
  addProductToCart,
  getProductOfUser,
  buyProductInCart,
  getUserOrders,
} = require("../controllers/products.controller");
const validateIfUserExists = require("../middlewares/usersValidation");
const authToken = require("../middlewares/authToken");

const router = Router();
router.get("/", getProducts);
router.post("/create", validateIfUserExists, createProduct);
router.post("/add", addProductToCart);
router.get("/:userId", authToken, getProductOfUser);
router.patch("/buy/:userId", authToken, buyProductInCart);
router.get("/order/:userId", authToken, getUserOrders);

module.exports = {
  productRoutes: router,
};
