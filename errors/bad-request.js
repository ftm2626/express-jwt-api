const { StatusCodes } = require('http-status-codes');
const CustomeApiError = require('./custom-error')
class BadRequest extends CustomeApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequest;
