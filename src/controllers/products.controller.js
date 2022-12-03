const ProductService = require("../services/product.services");
const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    await ProductService.postProduct(product);
    res.json({ status: "created product" });
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "failed product creation",
    });
  }
};

const getProducts = async (req, res, next) => {
  try {
    const result = await ProductService.getProducts();
    res.json(result);
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "",
    });
  }
};

const addProductToCart = async (req, res, next) => {
  try {
    const product = req.body;
    await ProductService.addProduct(product);
    res.json({ status: "product successfully added" });
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "No product added",
    });
  }
};

const getProductOfUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const cart = await ProductService.getUserCart(userId);
    const { id } = cart;
    //console.log(id);
    const result = await ProductService.getProductInCart(id);
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json({ mng: "no products added to your cart" });
    }
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "",
    });
  }
};

const buyProductInCart = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { status, productId } = req.body;
    const result = await ProductService.buyProduct(productId, status, userId);
    result
      ? res.json({ status: "Product purchased" })
      : res.status(401).json({ mng: "product no found" });
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "",
    });
  }
};

const getUserOrders = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await ProductService.getOrdersByUserId(userId);
    console.log(result.length);
    if (result.length > 0) {
      res.json(result);
    } else {
      res.json({ mng: "No orders yet" });
    }
  } catch (err) {
    next({
      status: 400,
      ErrMessage: err.message,
      customMsg: "",
    });
  }
};
module.exports = {
  createProduct,
  getProducts,
  addProductToCart,
  getProductOfUser,
  buyProductInCart,
  getUserOrders,
};
