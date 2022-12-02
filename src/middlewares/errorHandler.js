const errorHandler = (err, req, res, next) => {
  const { status, ErrMessage, customMsg } = err;

  res.status(status).json({
    ErrMessage,
    customMsg,
    // generalMsg: " ERROR MIDDLEWARE --> something is not right",
  });
};
module.exports = errorHandler;

// res.status(500).json({
//   status: "error",
//   err: err,
// });
