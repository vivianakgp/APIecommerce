const db = require("../utils/database");
//const { Users, Products, Cart, ProductsInCart, Order } = require("../models");
const { Order } = require("../models");

//Vicki token --> eyJhbGciOiJIUzUxMiJ9.Mg.mZJfrDOM7gSTiV91UmuMrw7ZixsMxNXk3oJ7ja97zAkSspoUjIxDRuMlWnhWxEMVMaQrpeWGzAMW2mwISJjwPQ
// amelia token --> eyJhbGciOiJIUzUxMiJ9.MQ.tgeJRz7aNmU4CXFSBiq4veWgoCbKK9xdI1B5-2G7XCokVdVBn2KzQO3vb97AIkIpTegcofWMQKuWj_RT4fap9g
// arrays with seeder info
const users = [
  { userName: "Amelia", email: "amely@gmail.com", password: "ame1234" },
  { userName: "Vicki", email: "vicki@gmail.com", password: "vicki1234" },
  { userName: "Marisol", email: "marisol@gmail.com", password: "mari1234" },
  { userName: "Diego", email: "diego@gmail.com", password: "diego1234" },
  { userName: "Vanesa", email: "vane@gmail.com", password: "vane1234" },
];
const products = [
  {
    name: "book",
    price: 3,
    availableQty: 5,
    image: "https//www.pixelstalk.net",
    userId: 1,
  },
  {
    name: "pen",
    price: 1,
    availableQty: 15,
    image: "https//www.pixelstalk.net",
    userId: 1,
  },
  {
    name: "pincel",
    price: 2,
    availableQty: 20,
    image: "https//www.pixelstalk.net",
    userId: 5,
  },
  {
    name: "laptop",
    price: 30,
    availableQty: 3,
    image: "https//www.pixelstalk.net",
    userId: 4,
  },
];
const carts = [
  { userId: 1, totalPrice: 234.89 },
  { userId: 2, totalPrice: 234.89 },
  { userId: 3, totalPrice: 234.89 },
  { userId: 4, totalPrice: 234.89 },
];
const productsInCart = [
  { cartId: 1, productId: 3, quantity: 5, price: 2 },
  { cartId: 1, productId: 2, quantity: 5, price: 1 },
  { cartId: 2, productId: 2, quantity: 15, price: 1 },
];
const orders = [
  { userId: 4, totalPrice: 2234.89 },
  { userId: 2, totalPrice: 4234.89 },
  { userId: 4, totalPrice: 5234.89 },
  { userId: 4, totalPrice: 24.89 },
];
db.sync({ forse: false })
  .then(() => console.log("starting seeders"))
  .then(() => {
    //users.forEach((element) => Users.create(element));
    //products.forEach((element) => Products.create(element));
    //carts.forEach((element) => Carts.create(element));
    //productsInCart.forEach((element) => ProductsInCart.create(element));
    orders.forEach((element) => Order.create(element));
  });
