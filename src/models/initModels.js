const {
  Users,
  Products,
  Carts,
  ProductsInCart,
  Order,
  ProductInOrder,
} = require("./index");
const initModels = () => {
  Users.hasMany(Products, { foreignKey: "user_id" }); //it creates the foreign keys in Products table with userId key
  Products.belongsTo(Users); // foreignKey not need
  Users.hasOne(Carts, { foreignKey: "user_id" });
  Carts.belongsTo(Users);
  Products.hasOne(ProductsInCart, { foreignKey: "product_id" });
  ProductsInCart.belongsTo(Products);
  Carts.hasMany(ProductsInCart, { foreignKey: "cart_id" });
  ProductsInCart.belongsTo(Carts);
  Users.hasMany(Order, { foreignKey: "user_id" });
  Order.belongsTo(Users, { foreignKey: "user_id" });
  Order.hasMany(ProductInOrder, { foreignKey: "order_id" });
  ProductInOrder.belongsTo(Order);
  Products.hasOne(ProductInOrder, { foreignKey: "product_id" });
  ProductInOrder.belongsTo(Products);
};
module.exports = initModels;
