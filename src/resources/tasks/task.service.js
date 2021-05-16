const tasksRepo = require('./task.memory.repository');


const getTasksByBoardId = (boardId) => tasksRepo.getTasksByBoardId(boardId);

const getTaskByBoardAndTaskId = (id) => {
    const task = tasksRepo.getTaskByBoardAndTaskId(id);
    if (!task) {
        throw new Error('Task not found');
    };
    return task;
};

const createNewTask = (task) => tasksRepo.createNewTask(task);

module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask };
