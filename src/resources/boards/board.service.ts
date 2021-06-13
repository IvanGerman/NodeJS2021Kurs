import { IBoard } from './board.model';

const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');


const getAll = (): Array<IBoard> => boardsRepo.getAll();

const getBoardById = (id: string): IBoard => {
    const board: IBoard = boardsRepo.getBoardById(id);
    if (!board) {
        throw new Error('Board not found');
    };
    return board;
};

const createNewBoard = (board: IBoard) => boardsRepo.createNewBoard(board);

const updateBoard = (boardId: string, newBoardData: IBoard) => boardsRepo.updateBoard(boardId, newBoardData);// return avtomatom

const deleteBoardById = (boardId: string) => {
    tasksService.deleteAllTasksByBoardId(boardId);
    return boardsRepo.deleteBoardById(boardId);
  };

module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById};



export {};