"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksService = require('../tasks/task.service');
const usersRepo = require('./user.memory.repository');
// const tasksService = require('../tasks/task.service');
const getAll = async () => {
    const users = await usersRepo.getAll();
    if (users === undefined)
        throw new Error('Users not found');
    return users;
};
const getUserById = async (id) => {
    const user = await usersRepo.getUserById(id);
    if (user === undefined)
        throw new Error('User not found');
    return user;
};
const createNewUser = async (dto) => {
    const newUser = await usersRepo.createNewUser(dto);
    if (newUser === undefined)
        throw new Error('User was not created');
    return newUser;
};
const updateUser = async (id, dto) => {
    const updatedUser = await usersRepo.updateUser(id, dto);
    if (updatedUser === null)
        throw new Error('User was not updated');
    return updatedUser;
};
const deleteUser = async (id) => {
    await tasksService.unassignUser(id);
    const deletedUser = await usersRepo.deleteUser(id);
    if (deletedUser === null)
        throw new Error('User was not deleted');
    return deletedUser;
};
module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };
