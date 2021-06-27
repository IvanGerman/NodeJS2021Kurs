import { Request, Response, NextFunction } from 'express';
import { IUser } from './user.model';

const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/').get(async (_req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
    const users: Array<IUser> = await usersService.getAll();  
    res.status(200).json(users.map(User.toResponse));
  } catch (err) { 
    next(err);
  };
});



router.route('/:id').get(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { id } = req.params;

  try {
    const user: IUser = await usersService.getUserById(id);  
    res.status(200).json(User.toResponse(user));
  } catch (err) { 
    next(err);
  };
});



router.route('/').post( async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  
  try {
    const user: IUser = await usersService.createNewUser(req.body);
    res.status(201).json(User.toResponse(user));
  } catch (err) { 
    next(err);
  };
});



router.route('/:id').put(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { id } = req.params;
  
  try {
    const user: IUser = await usersService.updateUser(id, req.body);  
    res.status(200).json(User.toResponse(user));
  } catch (err) { 
    next(err);
  }; 
});



router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const { id } = req.params;
  
  try {
    const user: IUser = await usersService.deleteUser(id);  
    res.status(204).json(`User ${user} successfully deleted`);
  } catch (err) { 
    next(err);
  }; 
});

module.exports = router;


export {};
