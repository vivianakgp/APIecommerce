const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const ProductsInCart = db.define("productsInCart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cartId: {
    type: DataTypes.INTEGER,
    field: "cart_id",
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    field: "product_id",
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "added",
  },
});
module.exports = ProductsInCart;
