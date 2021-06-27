import { getRepository } from 'typeorm';
import { BoardEntity } from '../../entities/Board'; 
import { IBoard, BoardDTO } from './board.model';


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
const getAll = async (): Promise<Array<BoardEntity> | undefined> => { 

  const boardRepository = getRepository(BoardEntity);
  return boardRepository.find() ;

};


/**
 * This function finds and returns a board by his id
 * @param {string} id - id of a board
 * @returns {board} board - returns Object of a board
 */

const getBoardById = async (id: string): Promise<IBoard | undefined> => {
  const boardRepository = getRepository(BoardEntity);
  const res = await boardRepository.findOne(id);
  if (res === undefined) return undefined;
  // @ts-ignore
  return res;
};


/**
 * This function creates and returns a new created board
 * @param {board} board - board who should be created
 * @returns {board} board - returns new created board
 */
const createNewBoard = async (dto: BoardDTO) => {
  const boardRepository = getRepository(BoardEntity);
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

const updateBoard = async (id: string, dto: Partial<BoardDTO>): Promise<BoardEntity | null> => {
  
  const boardRepository = getRepository(BoardEntity);
  const updatingBoard = await boardRepository.findOne(id);
  if (!updatingBoard) { return null};
  boardRepository.merge(updatingBoard, dto);
  const updatedBoard = await getRepository(BoardEntity).save(updatingBoard);
  return updatedBoard;
};



/**
 * This function deletes an board by his id
 * @param {string} boardId  - boardId of an board
 * @returns {board|null} board - returns deleted board or null if the board was not found
 */

const deleteBoardById = async (id: string): Promise<BoardEntity | null> => { 
// all boards tasks are deleted together with the board automatically
  const boardRepository = getRepository(BoardEntity);
  const deletingBoard = await boardRepository.findOne(id);
  if (deletingBoard === undefined) return null; 
  await boardRepository.remove(deletingBoard); 
  return deletingBoard;
};


module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById };




export {};