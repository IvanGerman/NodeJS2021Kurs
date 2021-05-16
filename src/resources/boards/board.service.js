const boardsRepo = require('./board.memory.repository');


const getAll = () => boardsRepo.getAll();

const getBoardById = (id) => {
    const board = boardsRepo.getBoardById(id);
    if (!board) {
        throw new Error('Board not found');
    };
    return board;
};

const createNewBoard = (board) => boardsRepo.createNewBoard(board);


module.exports = { getAll, getBoardById, createNewBoard };
