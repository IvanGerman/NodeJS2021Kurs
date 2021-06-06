const tasksRepo = require('./task.memory.repository.ts');


const getTasksByBoardId = (boardId) => tasksRepo.getTasksByBoardId(boardId);

const getTaskByBoardAndTaskId = (boardId, taskId) => {
    const task = tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
    if (!task) {
        throw new Error('Task not found');
    };
    return task;
};

const createNewTask = (task) => tasksRepo.createNewTask(task);

const updateTask = (boardId, taskId, newTaskData) => tasksRepo.updateTask(boardId, taskId, newTaskData);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);// return avtomatom

const unassignUser = (id) => tasksRepo.unassignUser(id);

const deleteAllTasksByBoardId = (boardId) => tasksRepo.deleteAllTasksByBoardId(boardId);




module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask, updateTask, deleteTask, unassignUser, deleteAllTasksByBoardId };




export {};