const { StatusCodes } = require("http-status-codes");
const CustomeApiError = require("./custom-error");
class UnAuthendticated extends CustomeApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnAuthendticated;
