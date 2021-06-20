import { Request, Response, NextFunction } from 'express';
import { IUser } from './user.model';

const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');


router.route('/').get(async (_req: Request, res: Response) => {

  const users: Array<IUser> = await usersService.getAll();
 
  if (!users) {
    return res.status(401).json( {message: 'Error, Users not found'} );
  };
  
  return res.status(200).json(users.map(User.toResponse));
});



router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;

  try {
    const user: IUser = await usersService.getUserById(id);
    res.status(200).json(User.toResponse(user));
  } catch (err) { 
  
    next(err);
  };

  // const user: IUser = await usersService.getUserById(id);

  // if (!user) {
  //   return res.status(404).json( {message: 'Error, User not found'} );
  // };
  
  // return res.status(200).json(User.toResponse(user));
});



router.route('/').post( async (req: Request, res: Response) => {
  
  const user: IUser = await usersService.createNewUser(
     new User({...req.body }));

  if (!user) {
    return res.status(400).json( {message: 'Error, new User was not created'} );
  };
    
  return res.status(201).json(User.toResponse(user));
});



router.route('/:id').put(async (req: Request, res: Response) => {

  const { id } = req.params;
  const newUserData: IUser = req.body;
  const user: IUser = await usersService.updateUser(id, newUserData);
  

  if (!user) {
    return res.status(400).json( {message: 'Error, User could not be updated'} );
  };
    
  return res.status(200).json(User.toResponse(user));
});



router.route('/:id').delete(async (req: Request, res: Response) => {

  const { id } = req.params;
  const user: IUser = await usersService.deleteUser(id);
  
  if (!user) { 
     return res.status(404).json( {message: 'Error, User could not be deleted'} );
  };
    
  return res.status(204).json(`User ${user} successfully deleted`);
});



module.exports = router;


export {};
