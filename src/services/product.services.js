const res = require("express/lib/response");
const { Op } = require("sequelize");
const { Products, Users, ProductsInCart, Carts, Order } = require("../models");

class ProductService {
  static async postProduct(product) {
    try {
      const result = await Products.create(product);
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async getProducts() {
    try {
      const result = await Products.findAll({
        where: {
          availableQty: {
            [Op.ne]: 0,
          },
        },
        include: {
          model: Users,
          attributes: ["userName"],
        },
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async addProduct(product) {
    try {
      const result = await ProductsInCart.create(product);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getUserCart(userId) {
    try {
      const result = await Carts.findOne({ where: { userId: userId } });
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async getProductInCart(cartId) {
    try {
      const result = await ProductsInCart.findAll({
        where: { cartId },
        attributes: ["cartId", "productId", "quantity"],
        include: {
          model: Products,
          attributes: ["name"],
        },
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
  static async buyProduct(productId, status, userId) {
    try {
      const userCart = await Carts.findOne({ where: { userId } });
      const product = await ProductsInCart.findOne({
        where: {
          [Op.and]: [{ productId }, { cartId: userCart.id }],
        },
      });
      if (product) {
        await ProductsInCart.update(
          { status: status },
          { where: { id: product.id } }
        );
        return true;
      } else {
        return false;
      }
      // await ProductsInCart.update(
      //   { status: status },
      //   {
      //     where: {
      //       [Op.and]: [{ productId }, { cartId: userCart.id }],
      //     },
      //   }
      // );
    } catch (err) {
      throw err;
    }
  }
  static async getOrdersByUserId(userId) {
    try {
      const result = await Order.findAll({
        where: { userId },
        attributes: ["id", "userId", "totalPrice"],
      });
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ProductService;
