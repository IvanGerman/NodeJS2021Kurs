import { Request, Response, NextFunction } from 'express';
import { ITask } from './task.model';

const router = require('express').Router({mergeParams: true});
const Task = require('./task.model');
const tasksService = require('./task.service');




router.route('/').get(async (_req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { boardId } = _req.params;
  
  try {
    const tasks: Array<ITask> = await tasksService.getTasksByBoardId(boardId);
    res.status(200).json(tasks);
  } catch (err) { 
    next(err);
  }; 
});





router.route('/:taskId').get(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { boardId, taskId } = req.params;

  try {
    const task: ITask = await tasksService.getTaskByBoardAndTaskId(boardId, taskId);
    res.status(200).json(task);
  } catch (err) { 
    next(err);
  };
});






router.route('/').post( async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  try {
    const { boardId } = req.params;
    const task: ITask = await tasksService.createNewTask(new Task({
      ...req.body,
      boardId
    }));
    res.status(201).json(task);
  } catch (err) { 
    next(err);
  };
});


router.route('/:taskId').put(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const {boardId, taskId} = req.params;

  try {
    const task: ITask = await tasksService.updateTask(boardId, taskId, req.body);  
    res.status(200).json(task);
  } catch (err) { 
    next(err);
  }; 
});






router.route('/:taskId').delete(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const {boardId, taskId} = req.params;

  try {
    const task: ITask = await tasksService.deleteTask(boardId, taskId);  
    
    res.status(204).json(task);
  } catch (err) { 
    next(err);
  }; 
});




module.exports = router;

export {};