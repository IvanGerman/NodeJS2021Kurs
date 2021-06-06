const boardsRepo = require('./board.memory.repository.ts');
const tasksService = require('../tasks/task.service.ts');


const getAll = () => boardsRepo.getAll();

const getBoardById = (id) => {
    const board = boardsRepo.getBoardById(id);
    if (!board) {
        throw new Error('Board not found');
    };
    return board;
};

const createNewBoard = (board) => boardsRepo.createNewBoard(board);

const updateBoard = (boardId, newBoardData) => boardsRepo.updateBoard(boardId, newBoardData);// return avtomatom

const deleteBoardById = (boardId) => {
    tasksService.deleteAllTasksByBoardId(boardId);
    return boardsRepo.deleteBoardById(boardId);
  };

module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById};



export {};