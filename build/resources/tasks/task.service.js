"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasksRepo = require('./task.memory.repository');
const getTasksByBoardId = async (boardId) => {
    const tasks = await tasksRepo.getTasksByBoardId(boardId);
    if (tasks === undefined)
        throw new Error('Tasks not found');
    return tasks;
};
const getTaskByBoardAndTaskId = async (boardId, taskId) => {
    const task = await tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
    if (task === undefined)
        throw new Error('Task not found');
    return task;
};
const createNewTask = async (task) => {
    const newTask = await tasksRepo.createNewTask(task);
    if (newTask === undefined)
        throw new Error('Task was not created');
    return newTask;
};
const updateTask = async (boardId, taskId, newTaskData) => {
    const updatingTask = await tasksRepo.updateTask(boardId, taskId, newTaskData);
    if (updatingTask === null)
        throw new Error('Task was not updated');
    return updatingTask;
};
const deleteTask = async (boardId, taskId) => {
    const deletingTask = await tasksRepo.deleteTask(boardId, taskId);
    if (deletingTask === null)
        throw new Error('Task was not deleted');
    return deletingTask;
};
const unassignUser = async (id) => {
    await tasksRepo.unassignUser(id);
};
const deleteAllTasksByBoardId = (id) => {
    console.log('id1: ', id);
    tasksRepo.deleteAllTasksByBoardId(id);
};
module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask, updateTask, deleteTask, unassignUser, deleteAllTasksByBoardId };
