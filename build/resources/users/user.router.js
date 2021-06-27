"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
router.route('/').get(async (_req, res, next) => {
    try {
        const users = await usersService.getAll();
        res.status(200).json(users.map(User.toResponse));
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:id').get(async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await usersService.getUserById(id);
        res.status(200).json(User.toResponse(user));
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/').post(async (req, res, next) => {
    try {
        const user = await usersService.createNewUser(req.body);
        res.status(201).json(User.toResponse(user));
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:id').put(async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await usersService.updateUser(id, req.body);
        res.status(200).json(User.toResponse(user));
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:id').delete(async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await usersService.deleteUser(id);
        res.status(204).json(User.toResponse(user));
    }
    catch (err) {
        next(err);
    }
    ;
});
module.exports = router;
