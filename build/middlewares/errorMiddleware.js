"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const fs = require("fs");
const errorLogWriteStream = fs.createWriteStream('./logging/errorsLogs.log');
function errorMiddleware(err, _req, res, next) {
    const { name, message, stack } = err;
    console.log('name:::::::::::::', name);
    console.log('message:::::::::::::', message);
    console.log('stack:::::::::::::', stack);
    console.log('err:::::::::::::', err);
    let statusCode;
    if (name === 'Error') {
        statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
    }
    else {
        statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    }
    ;
    //   const statusCode =
    //     name === 'Error'
    //       ? StatusCodes.NOT_FOUND
    //       : StatusCodes.INTERNAL_SERVER_ERROR;
    const messageReason = http_status_codes_1.getReasonPhrase(statusCode);
    res.status(statusCode).json({ statusCode, messageReason });
    const errorDate = new Date();
    const errorData = `
  Error from       ${errorDate}
  status code:     ${statusCode}
  errorName:       ${name}
  errorMessage:    ${message}
  errorStack:      ${stack}\n`;
    // fs.appendFileSync("errors.log", data);
    errorLogWriteStream.write(errorData);
    next();
}
module.exports = errorMiddleware;
