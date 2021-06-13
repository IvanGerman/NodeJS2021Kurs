"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const { table } = require('table');
const { finished } = require('stream');
const loggingMiddleware = (req, res, next) => {
    const { method, url } = req;
    next();
    finished(res, () => {
        const { statusCode } = res;
        const data = [
            ['Request Method : ', method],
            ['Request URL : ', url],
            ['Status Code : ', statusCode],
            ['Request Params : ', JSON.stringify(req.params)],
            ['Request Query : ', JSON.stringify(req.query)],
            ['Request Body : ', JSON.stringify(req.body)]
        ];
        const requestDate = new Date();
        fs.appendFileSync("logging.log", `Request from ${requestDate.toString()} : \n${table(data)}\n`);
    });
};
module.exports = loggingMiddleware;
