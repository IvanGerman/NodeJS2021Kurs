import { Request, Response, NextFunction } from 'express';
import { IBoard } from './board.model';

const router = require('express').Router();
// const Board = require('./board.model');
const boardsService = require('./board.service');


router.route('/').get(async (_req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
    const boards: Array<IBoard> = await boardsService.getAll();  
    res.status(200).json(boards);
  } catch (err) { 
    next(err);
  };
});


router.route('/:id').get( async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { id } = req.params;
  try {
    const board: IBoard = await boardsService.getBoardById(id);  
    res.status(200).json(board);
  } catch (err) { 
    next(err);
  };  
});



router.route('/').post( async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  try {
    const board: IBoard = await boardsService.createNewBoard(req.body);
    res.status(201).json(board);
  } catch (err) { 
    next(err);
  };
});



router.route('/:boardId').put( async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const {id} = req.params;
  
  try {
    const board: IBoard = await boardsService.updateBoard(id, req.body);
    res.status(200).json(board);
  } catch (err) { 
    next(err);
  }; 
});


router.route('/:boardId').delete(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { boardId } = req.params; 

  try {  
    const board: IBoard = await boardsService.deleteBoardById(boardId); 
    
    res.status(204).json(board);
  } catch (err) { 
    next(err);
  }; 
});


module.exports = router;



export {};