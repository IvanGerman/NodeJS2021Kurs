const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getBoardById = (id) => boardsRepo.getBoardById(id);
const createNewBoard = (board) => boardsRepo.createNewBoard(board);

module.exports = { getAll, getBoardById, createNewBoard };
