"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');
const getAll = () => usersRepo.getAll();
const getUserById = (id) => {
    const user = usersRepo.getUserById(id);
    if (!user)
        throw new Error('User not found');
    return user;
};
// const getUserById = (id: string): IUser => {
//     const user: IUser = usersRepo.getUserById(id);
//     return user;
// };
const createNewUser = (user) => usersRepo.createNewUser(user);
const updateUser = (id, newUserData) => usersRepo.updateUser(id, newUserData);
const deleteUser = (id) => {
    tasksService.unassignUser(id);
    return usersRepo.deleteUser(id);
};
module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };
