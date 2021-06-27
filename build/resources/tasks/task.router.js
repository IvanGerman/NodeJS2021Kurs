"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');
router.route('/').get(async (_req, res, next) => {
    const { boardId } = _req.params;
    try {
        const tasks = await tasksService.getTasksByBoardId(boardId);
        res.status(200).json(tasks);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:taskId').get(async (req, res, next) => {
    const { boardId, taskId } = req.params;
    try {
        const task = await tasksService.getTaskByBoardAndTaskId(boardId, taskId);
        res.status(200).json(task);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/').post(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const task = await tasksService.createNewTask(new Task({
            ...req.body,
            boardId
        }));
        res.status(201).json(task);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:taskId').put(async (req, res, next) => {
    const { boardId, taskId } = req.params;
    try {
        const task = await tasksService.updateTask(boardId, taskId, req.body);
        res.status(200).json(task);
    }
    catch (err) {
        next(err);
    }
    ;
});
router.route('/:taskId').delete(async (req, res, next) => {
    const { boardId, taskId } = req.params;
    try {
        const task = await tasksService.deleteTask(boardId, taskId);
        res.status(204).json(task);
    }
    catch (err) {
        next(err);
    }
    ;
});
module.exports = router;
