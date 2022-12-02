const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const ProductInOrder = db.define("productInOrder", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    field: "order_id",
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
module.exports = ProductInOrder;
