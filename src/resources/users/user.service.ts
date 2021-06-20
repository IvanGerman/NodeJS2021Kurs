import { IUser } from './user.model';
import { UserDTO } from './user.model';

const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = async(): Promise<Array<IUser>> => {
  const users: Array<IUser> = await usersRepo.getAll();
  if (users === undefined) throw new Error('Users not found');
  return users;
};

const getUserById = async(id: string): Promise<IUser> => {
  const user: IUser = await usersRepo.getUserById(id);
  if (user === undefined) throw new Error('User not found');
  return user;
};

const createNewUser = async(dto: UserDTO): Promise<IUser> => {
  const newUser: IUser = await usersRepo.createNewUser(dto);
  if (newUser === undefined) throw new Error('User was not created');
  return newUser;
};

const updateUser = async(id: string, dto: UserDTO): Promise<IUser> => {
  const updatedUser: IUser = await usersRepo.updateUser(id, dto);
  if (updatedUser === null) throw new Error('User was not updated');
  return updatedUser;
};

const deleteUser = async(id: string): Promise<IUser> => {
    await tasksService.unassignUser(id);
    const deletedUser: IUser = await usersRepo.deleteUser(id);
    if (deletedUser === null) throw new Error('User was not deleted');
    return deletedUser;
};



module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };




export {};