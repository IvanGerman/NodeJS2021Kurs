import { IBoard, BoardDTO } from './board.model';

const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service')


const getAll = async(): Promise<Array<IBoard>> => {
    const boards: Array<IBoard> = await boardsRepo.getAll();
    if (boards === undefined) throw new Error('Boards not found');
    return boards;
};

const getBoardById = async(id: string): Promise<IBoard> => {
    const board: IBoard = await boardsRepo.getBoardById(id);
    if (board === undefined) throw new Error('Board not found');
    return board;
};

const createNewBoard = async(dto: BoardDTO): Promise<IBoard> => {
    const newBoard: IBoard = await boardsRepo.createNewBoard(dto);
    if (newBoard === undefined) throw new Error('Board was not created');
    return newBoard;
};


const updateBoard = async(id: string, dto: Partial<BoardDTO>): Promise<IBoard> => {
    const updatedBoard: IBoard = await boardsRepo.updateBoard(id, dto);
    if (updatedBoard === null) throw new Error('Board was not updated');
    return updatedBoard;
};


const deleteBoardById = async (id: string): Promise<IBoard> => {  
    await tasksService.deleteAllTasksByBoardId(id);
    const deletedBoard: IBoard = await boardsRepo.deleteBoardById(id);
    if (deletedBoard === null) throw new Error('Board was not deleted');
    return deletedBoard;
};

  


module.exports = { getAll, getBoardById, createNewBoard, updateBoard, deleteBoardById};



export {};