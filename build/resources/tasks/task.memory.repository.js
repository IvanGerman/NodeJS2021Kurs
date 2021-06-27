"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Task_1 = require("../../entities/Task");
// let Tasks = require('./task.dataBase');
/**
 * @typedef task
 * @type {Object}
 * @property {string} id - id of a task
 * @property {string} title - title of a task
 * @property {number} order - order of a task
 * @property {string} description - description of a task
 * @property {string} userId - id of an user who is currently working on that task
 * @property {string} boardId - id of a board this task belongs to
 * @property {string} columnId - id of a column this task belongs to
 */
/**
 * This function finds and returns tasks from certain board by his boardId
 * @param {string} boardId - id of a board the tasks belong to
 * @returns {Array.<task>} tasks - returns all the tasks in a certain board
 */
const getTasksByBoardId = async (boardId) => {
    const taskRepository = typeorm_1.getRepository(Task_1.TaskEntity);
    return taskRepository.find({ where: { boardId } });
};
/**
 * This function finds and returns a certain task  by his boardId and taskId
 * @param {string} boardId - id of a board the task belong to
 * @param {string} taskId - id of the task
 * @returns {task} task - returns a certain the task
 */
const getTaskByBoardAndTaskId = async (boardId, taskId) => {
    const taskRepository = typeorm_1.getRepository(Task_1.TaskEntity);
    const res = taskRepository.findOne({ where: { boardId, id: taskId } });
    if (res === undefined)
        return undefined;
    return res;
};
/**
 * This function creates and returns a new created task
 * @param {task} task - task which should be created
 * @returns {task} task - returns new created task
 */
const createNewTask = async (task) => {
    const taskRepository = typeorm_1.getRepository(Task_1.TaskEntity);
    const newTask = taskRepository.create(task);
    const savedTask = taskRepository.save(newTask);
    return savedTask;
};
/**
 * This function updates and returns a task
 * @param {string} boardId - id of a board the task belong to
 * @param {string} taskId - id of the task
 * @param {task} taskData - new values for task properties
 * @returns {task|null} updatedTask - returns the updated object of a task or null if the task was not found
 */
const updateTask = async (boardId, taskId, taskData) => {
    const taskRepository = typeorm_1.getRepository(Task_1.TaskEntity);
    const res = taskRepository.findOne({ where: { boardId, id: taskId } });
    if (res === undefined)
        return null;
    await taskRepository.update(taskId, taskData);
    const updatedTask = await taskRepository.findOne({ where: { id: taskId } });
    // @ts-ignore
    return updatedTask;
};
/**
 * This function deletes a certain task
 * @param {string} boardId - id of a board the task belong to
 * @param {string} taskId - id of the task
 * @returns {task|null} task - returns the deleted task or null if the task was not found
 */
const deleteTask = async (boardId, taskId) => {
    const taskRepository = typeorm_1.getRepository(Task_1.TaskEntity);
    const res = taskRepository.findOne({ where: { boardId, id: taskId } });
    if (res === undefined)
        return null;
    const deletedTask = await taskRepository.findOne({ where: { id: taskId } });
    await taskRepository.delete(taskId);
    // @ts-ignore
    return deletedTask;
};
/**
 * This function sets a property "userId" to null by each task a deleted user was related with
 * @param {string} id - id of the deleted user
 * @returns {void}
 */
const unassignUser = async (id) => {
    const taskRepository = typeorm_1.getRepository(Task_1.TaskEntity);
    await taskRepository.update({ userId: id }, { userId: null });
};
/**
 * This function deletes all task which belonged to a deleted board
 * @param {string} id - id of the deleted board
 * @returns {void}
 */
const deleteAllTasksByBoardId = async (id) => {
    const taskRepository = typeorm_1.getRepository(Task_1.TaskEntity);
    const allTasks = await taskRepository.find({ where: { boardId: id } });
    await taskRepository.remove(allTasks);
};
module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask, updateTask, deleteTask, unassignUser, deleteAllTasksByBoardId };
