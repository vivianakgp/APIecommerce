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

const router = Router();
router.get("/", getProducts);
router.post("/create", validateIfUserExists, createProduct);
router.post("/add", addProductToCart);
router.get("/:userId", getProductOfUser);
router.patch("/buy/:productId", buyProductInCart);
router.get("/order/:userId", getUserOrders);

module.exports = {
  productRoutes: router,
};
