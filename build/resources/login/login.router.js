"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const loginService = require('./login.service');
router.route('/').post(async (req, res, next) => {
    try {
        const accessToken = await loginService.createNewToken(req.body);
        console.log('accessTokenn: ', accessToken);
        if (accessToken === null) {
            res.status(403).json("Unsuccessfull login");
        }
        ;
        if (accessToken) {
            res.status(201).json(accessToken);
        }
    }
    catch (err) {
        next(err);
    }
    ;
});
module.exports = router;
