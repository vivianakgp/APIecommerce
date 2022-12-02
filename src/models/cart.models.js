const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Cart = db.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id",
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
module.exports = Cart;
