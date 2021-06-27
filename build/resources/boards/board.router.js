"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
// const Board = require('./board.model');
const boardsService = require('./board.service');
router.route('/').get(async (_req, res, next) => {
    try {
        const boards = await boardsService.getAll();
        res.status(200).json(boards);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:id').get(async (req, res, next) => {
    const { id } = req.params;
    try {
        const board = await boardsService.getBoardById(id);
        res.status(200).json(board);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/').post(async (req, res, next) => {
    try {
        const board = await boardsService.createNewBoard(req.body);
        res.status(201).json(board);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:boardId').put(async (req, res, next) => {
    const { id } = req.params;
    try {
        const board = await boardsService.updateBoard(id, req.body);
        res.status(200).json(board);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:boardId').delete(async (req, res, next) => {
    const { boardId } = req.params;
    try {
        const board = await boardsService.deleteBoardById(boardId);
        res.status(204).json(board);
    }
    catch (err) {
        next(err);
    }
    ;
});
module.exports = router;
