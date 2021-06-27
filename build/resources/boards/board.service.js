"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');
const getAll = async () => {
    const boards = await boardsRepo.getAll();
    if (boards === undefined)
        throw new Error('Boards not found');
    return boards;
};
const getBoardById = async (id) => {
    const board = await boardsRepo.getBoardById(id);
    if (board === undefined)
        throw new Error('Board not found');
    return board;
};
const createNewBoard = async (dto) => {
    const newBoard = await boardsRepo.createNewBoard(dto);
    if (newBoard === undefined)
        throw new Error('Board was not created');
    return newBoard;
};
const updateBoard = async (id, dto) => {
    const updatedBoard = await boardsRepo.updateBoard(id, dto);
    if (updatedBoard === null)
        throw new Error('Board was not updated');
    return updatedBoard;
};
const deleteBoardById = async (id) => {
    await tasksService.deleteAllTasksByBoardId(id);
    const deletedBoard = await boardsRepo.deleteBoardById(id);
    if (deletedBoard === null)
        throw new Error('Board was not deleted');
    return deletedBoard;
};
module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById };
