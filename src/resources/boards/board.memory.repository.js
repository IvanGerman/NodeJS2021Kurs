const Boards = require('./board.dataBase');



const getAll = async () => Boards;



const getBoardById = async (id) => Boards.find( board => board.id === id );



const createNewBoard = async (board) => {
  Boards.push(board);
  return getBoardById(board.id);
  
};



const updateBoard = async (boardId, newBoardData) => {

  const index = Boards.findIndex(board => board.id === boardId);

  if (index === -1) return null;

  const updatedBoard = {...Boards[index], ...newBoardData, boardId };
  Boards[index] = updatedBoard;
  return updatedBoard;
};



const deleteBoardById = async (boardId) => {
  
  const index = Boards.findIndex(board => board.id === boardId);

  if (index === -1) return null;
  
  return Boards.splice(index, 1);
};



module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById };
