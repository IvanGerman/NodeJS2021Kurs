const router = require('express').Router();
const Board = require('./board.model.ts');
const boardsService = require('./board.service.ts');



router.route('/').get(async (req, res) => {

  const boards = await boardsService.getAll();

  if (!boards) {
    return res.status(401).json( {message: 'Error, Boards not found'} );
  };
  
  return res.status(200).json(boards); 
});



router.route('/:id').get( async (req, res) => {

  const { id } = req.params;
  const board = await boardsService.getBoardById(id);

  if (!board) {
    return res.status(404).json( {message: 'Error, Board not found'} );
  };
  
  return res.status(200).json(board);  
});



router.route('/').post( async (req,res) => { 
  
  const board = await boardsService.createNewBoard(new Board({...req.body}));
  
  if (!board) {
    return res.status(400).json( {message: 'Error, new Board was not created'} );
  };
    
  return res.status(201).json(board);
});



router.route('/:boardId').put( async (req, res) => {

  const {boardId} = req.params;
  const newBoardData = req.body;
  const board = await boardsService.updateBoard(boardId, newBoardData);

  if (!board) {
    return res.status(400).json( {message: 'Error, Board could not be updated'} );
  };
    
  return res.status(200).json(board);
});



router.route('/:boardId').delete(async (req, res) => {

  const {boardId} = req.params;
  const board = await boardsService.deleteBoardById(boardId);

  if (!board) { 
    return res.status(404).json( {message: 'Error, Board could not be deleted'} );
  };
 
  return res.status(204).json(`Board ${board} successfully deleted`);
});



module.exports = router;



export {};