import { ITask } from './task.model';

const tasksRepo = require('./task.memory.repository');


const getTasksByBoardId = (boardId: string): Array<ITask> => tasksRepo.getTasksByBoardId(boardId);

const getTaskByBoardAndTaskId = (boardId: string, taskId: string): ITask => {
    const task: ITask = tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
    if (!task) {
        throw new Error('Task not found');
    };
    return task;
};

const createNewTask = (task: ITask) => tasksRepo.createNewTask(task);

const updateTask = (boardId: string, taskId: string, newTaskData: ITask) => tasksRepo.updateTask(boardId, taskId, newTaskData);

const deleteTask = (boardId: string, taskId: string) => tasksRepo.deleteTask(boardId, taskId);// return avtomatom

const unassignUser = async(id: string): Promise<void> => {
  await tasksRepo.unassignUser(id);
};

const deleteAllTasksByBoardId = (boardId: string) => tasksRepo.deleteAllTasksByBoardId(boardId);




module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask, updateTask, deleteTask, unassignUser, deleteAllTasksByBoardId };




export {};