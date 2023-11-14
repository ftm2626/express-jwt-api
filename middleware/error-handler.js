const { StatusCodes } = require("http-status-codes");
const { CustomeApiError } = require("../errors");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomeApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something went wrong try again later");
};

module.exports = errorHandlerMiddleware;
