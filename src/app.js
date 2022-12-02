const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// middlewares
const globalErrHandler = require("./middlewares/errorHandler");
// models
const initModels = require("./models/initModels");
// routes
const { userRoutes, productRoutes } = require("./routes");
const app = express();
app.use(express.json());
app.use(morgan("env"));
app.use(cors());
initModels();
// ENDPOINTS
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/products", productRoutes);

// global error handler
app.use("*", globalErrHandler);
module.exports = app;
