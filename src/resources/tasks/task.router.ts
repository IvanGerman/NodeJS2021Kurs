import { Request, Response } from 'express';
import { ITask } from './task.model';

const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const tasksService = require('./task.service');




router.route('/').get(async (_req: Request, res: Response) => {

  const { boardId } = _req.params;
  const tasks: Array<ITask> = await tasksService.getTasksByBoardId(boardId);
  
  if (!tasks) {
    return res.status(401).json( {message: 'Error, Tasks not found'} );
  };
  
  return res.status(200).json(tasks); 
});



router.route('/:taskId').get(async (req: Request, res: Response) => {

  const { boardId, taskId } = req.params;
  const task: ITask = await tasksService.getTaskByBoardAndTaskId(boardId, taskId);
  
  if (!task) {
    return res.status(404).json( {message: 'Error, Task not found'} );
  };
  
  return res.status(200).json(task);
});



router.route('/').post(async (req: Request, res: Response) => {

  const { boardId } = req.params;
  const task: ITask = await tasksService.createNewTask(new Task({
    ...req.body,
    boardId
  }));

  if (!task) {
    return res.status(400).json( {message: 'Error, new Task was not created'} );
  };
    
  return res.status(201).json(task);
});



router.route('/:taskId').put(async (req: Request, res: Response) => {

  const {boardId, taskId} = req.params;
  const newTaskData: ITask = req.body;
  const task: ITask = await tasksService.updateTask(boardId, taskId, newTaskData);

  if (!task) {
    return res.status(400).json( {message: 'Error, Task could not be updated'} );
  };
    
  return res.status(200).json(task);
});



router.route('/:taskId').delete(async (req: Request, res: Response) => {

  const {boardId, taskId} = req.params;
  const task: ITask = await tasksService.deleteTask(boardId, taskId);
  
  if (!task) { 
    return res.status(404).json( {message: 'Error, Task could not be deleted'} );
  };
  
  return res.status(204).json('Task successfully deleted');
});



module.exports = router;

export {};