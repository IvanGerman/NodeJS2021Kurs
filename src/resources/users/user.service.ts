import { IUser } from './user.model';

const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = (): Array<IUser> => usersRepo.getAll();

const getUserById = (id: string): IUser => {
  const user: IUser = usersRepo.getUserById(id);
  if (!user) throw new Error('User not found');
  return user;
};
// const getUserById = (id: string): IUser => {
//     const user: IUser = usersRepo.getUserById(id);
//     return user;
// };

const createNewUser = (user: IUser) => usersRepo.createNewUser(user);

const updateUser = (id: string, newUserData: IUser) => usersRepo.updateUser(id, newUserData);

const deleteUser = (id: string) => {
    tasksService.unassignUser(id);
    return usersRepo.deleteUser(id);
  };


module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };




export {};