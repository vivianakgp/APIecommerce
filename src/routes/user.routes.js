const { Router } = require("express");
const { authUser, createUser } = require("../controllers/users.controller");
const router = Router();
router.post("/login", authUser);
router.post("/singup", createUser);

module.exports = {
  userRoutes: router,
};
