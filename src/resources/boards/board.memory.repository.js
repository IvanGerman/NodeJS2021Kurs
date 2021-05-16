const Boards = require('./board.dataBase');

const getAll = async () => Boards;

const getBoardById = async (id) => Boards.find( board => board.id === id );

const createNewBoard = async (board) => {
  Boards.push(board);
  return getBoardById(board.id);
};

module.exports = { getAll, getBoardById, createNewBoard };
