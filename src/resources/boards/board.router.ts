import { Request, Response } from 'express';
import { IBoard } from './board.model';

const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');



router.route('/').get(async (_req: Request, res: Response) => {

  const boards: Array<IBoard> = await boardsService.getAll();

  if (!boards) {
    return res.status(401).json( {message: 'Error, Boards not found'} );
  };
  
  return res.status(200).json(boards); 
});



router.route('/:id').get( async (req: Request, res: Response) => {

  const { id } = req.params;
  const board: IBoard = await boardsService.getBoardById(id);

  if (!board) {
    return res.status(404).json( {message: 'Error, Board not found'} );
  };
  
  return res.status(200).json(board);  
});



router.route('/').post( async (req: Request, res: Response) => { 
  
  const board: IBoard = await boardsService.createNewBoard(new Board({...req.body}));
  
  if (!board) {
    return res.status(400).json( {message: 'Error, new Board was not created'} );
  };
    
  return res.status(201).json(board);
});



router.route('/:boardId').put( async (req: Request, res: Response) => {

  const {boardId} = req.params;
  const newBoardData: IBoard = req.body;
  const board: IBoard = await boardsService.updateBoard(boardId, newBoardData);

  if (!board) {
    return res.status(400).json( {message: 'Error, Board could not be updated'} );
  };
    
  return res.status(200).json(board);
});



router.route('/:boardId').delete(async (req: Request, res: Response) => {

  const {boardId} = req.params;
  const board: IBoard = await boardsService.deleteBoardById(boardId);

  if (!board) { 
    return res.status(404).json( {message: 'Error, Board could not be deleted'} );
  };
 
  return res.status(204).json(`Board ${board} successfully deleted`);
});



module.exports = router;



export {};