"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Board_1 = require("../../entities/Board");
/**
 * @typedef  column
 * @type {Object}
 * @property {string} id - id of a column
 * @property {string} title - title  of a column
 * @property {number} order - order of a column
 */
/**
 * @typedef  board
 * @type {Object}
 * @property {string} id - id of a board
 * @property {string} title - title of a board
 * @property {Array.<column>} columns - columns of a board
 */
/**
 * This function returns a list of all boards
 * @returns {Array.<board>} Boards - returns an array of all boards
 */
const getAll = async () => {
    const boardRepository = typeorm_1.getRepository(Board_1.BoardEntity);
    return boardRepository.find();
};
/**
 * This function finds and returns a board by his id
 * @param {string} id - id of a board
 * @returns {board} board - returns Object of a board
 */
const getBoardById = async (id) => {
    const boardRepository = typeorm_1.getRepository(Board_1.BoardEntity);
    const res = await boardRepository.findOne(id);
    if (res === undefined)
        return undefined;
    // @ts-ignore
    return res;
};
/**
 * This function creates and returns a new created board
 * @param {board} board - board who should be created
 * @returns {board} board - returns new created board
 */
const createNewBoard = async (dto) => {
    const boardRepository = typeorm_1.getRepository(Board_1.BoardEntity);
    const newBoard = boardRepository.create(dto);
    const savedBoard = boardRepository.save(newBoard);
    return savedBoard;
};
/**
 * This function updates and returns a board
 * @param {string} boardId - id of a board
 * @param {board} newBoardData - new values for boards properties
 * @returns {board|null} updatedBoard - returns the updated object of a board or null if the board was not
 * found
 */
const updateBoard = async (id, dto) => {
    const boardRepository = typeorm_1.getRepository(Board_1.BoardEntity);
    const updatingBoard = await boardRepository.findOne(id);
    if (!updatingBoard) {
        return null;
    }
    ;
    boardRepository.merge(updatingBoard, dto);
    const updatedBoard = await typeorm_1.getRepository(Board_1.BoardEntity).save(updatingBoard);
    return updatedBoard;
};
/**
 * This function deletes an board by his id
 * @param {string} boardId  - boardId of an board
 * @returns {board|null} board - returns deleted board or null if the board was not found
 */
const deleteBoardById = async (id) => {
    // all boards tasks are deleted together with the board automatically
    const boardRepository = typeorm_1.getRepository(Board_1.BoardEntity);
    const deletingBoard = await boardRepository.findOne(id);
    if (deletingBoard === undefined)
        return null;
    await boardRepository.remove(deletingBoard);
    return deletingBoard;
};
module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById };
