const Tasks = require('./task.dataBase');


const getTasksByBoardId = async (boardId) => Tasks.find( task => task.boardId === boardId );

const getTaskByBoardAndTaskId = async (id) => Tasks.find( task => task.id === id );

const createNewTask = async (task) => {
  Tasks.push(task);
  return getTaskByBoardAndTaskId(task.id);
};

module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask };
