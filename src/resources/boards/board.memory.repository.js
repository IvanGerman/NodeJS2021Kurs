const Boards = require('./board.dataBase');


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
const getAll = async () => Boards;





/**
 * This function finds and returns a board by his id
 * @param {string} id - id of a board
 * @returns {board} board - returns Object of a board
 */
const getBoardById = async (id) => Boards.find( board => board.id === id );




/**
 * This function creates and returns a new created board
 * @param {board} board - board who should be created
 * @returns {board} board - returns new created board
 */
const createNewBoard = async (board) => {
  Boards.push(board);
  return board;
  
};


/**
 * This function updates and returns a board
 * @param {string} boardId - id of a board
 * @param {board} newBoardData - new values for boards properties
 * @returns {board|null} updatedBoard - returns the updated object of a board or null if the board was not
 * found
 */
const updateBoard = async (boardId, newBoardData) => {

  const index = Boards.findIndex(board => board.id === boardId);

  if (index === -1) return null;

  const updatedBoard = {...Boards[index], ...newBoardData, boardId };
  Boards[index] = updatedBoard;
  return updatedBoard;
};


/**
 * This function deletes an board by his id
 * @param {string} boardId  - boardId of an board
 * @returns {board|null} board - returns deleted board or null if the board was not found
 */
const deleteBoardById = async (boardId) => {
  
  const index = Boards.findIndex(board => board.id === boardId);

  if (index === -1) return null;
  
  return Boards.splice(index, 1);
};



module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById };
