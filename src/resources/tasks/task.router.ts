const router = require('express').Router({mergeParams: true});
const Task = require('./task.model.ts');
const tasksService = require('./task.service.ts');



router.route('/').get(async (req, res) => {

  const { boardId } = req.params;
  const tasks = await tasksService.getTasksByBoardId(boardId);
  
  if (!tasks) {
    return res.status(401).json( {message: 'Error, Tasks not found'} );
  };
  
  return res.status(200).json(tasks); 
});



router.route('/:taskId').get(async (req, res) => {

  const { boardId, taskId } = req.params;
  const task = await tasksService.getTaskByBoardAndTaskId(boardId, taskId);
  
  if (!task) {
    return res.status(404).json( {message: 'Error, Task not found'} );
  };
  
  return res.status(200).json(task);
});



router.route('/').post(async (req, res) => {

  const { boardId } = req.params;
  const task = await tasksService.createNewTask(new Task({
    ...req.body,
    boardId
  }));

  if (!task) {
    return res.status(400).json( {message: 'Error, new Task was not created'} );
  };
    
  return res.status(201).json(task);
});



router.route('/:taskId').put(async (req, res) => {

  const {boardId, taskId} = req.params;
  const newTaskData = req.body;
  const task = await tasksService.updateTask(boardId, taskId, newTaskData);

  if (!task) {
    return res.status(400).json( {message: 'Error, Task could not be updated'} );
  };
    
  return res.status(200).json(task);
});



router.route('/:taskId').delete(async (req, res) => {

  const {boardId, taskId} = req.params;
  const task = await tasksService.deleteTask(boardId, taskId);
  
  if (!task) { 
    return res.status(404).json( {message: 'Error, Task could not be deleted'} );
  };
  
  return res.status(204).json('Task successfully deleted');
});



module.exports = router;
