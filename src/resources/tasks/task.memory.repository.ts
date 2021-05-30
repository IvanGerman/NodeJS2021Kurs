let Tasks = require('./task.dataBase.ts');


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
const getTasksByBoardId = async (boardId) => Tasks.filter(task => task.boardId === boardId);




/**
 * This function finds and returns a certain task  by his boardId and taskId
 * @param {string} boardId - id of a board the task belong to
 * @param {string} taskId - id of the task
 * @returns {task} task - returns a certain the task 
 */
const getTaskByBoardAndTaskId = async (boardId, taskId) => Tasks.find(task => task.boardId === boardId && task.id === taskId);




/**
 * This function creates and returns a new created task
 * @param {task} task - task which should be created
 * @returns {task} task - returns new created task
 */
const createNewTask = async (task) => {
  Tasks.push(task);
  return task;
};




/**
 * This function updates and returns a task
 * @param {string} boardId - id of a board the task belong to
 * @param {string} taskId - id of the task
 * @param {task} taskData - new values for task properties
 * @returns {task|null} updatedTask - returns the updated object of a task or null if the task was not found
 */
const updateTask = async (boardId, taskId, taskData) => {

  const index = Tasks.findIndex(task => task.boardId === boardId && task.id === taskId);

  if (index === -1) return null;

  const updatedTask = {...Tasks[index], ...taskData, id: taskId };
  Tasks[index] = updatedTask;
  return updatedTask;
};




/**
 * This function deletes a certain task
 * @param {string} boardId - id of a board the task belong to
 * @param {string} taskId - id of the task
 * @returns {task|null} task - returns the deleted task or null if the task was not found
 */
const deleteTask = async (boardId, taskId) => {

  const index = Tasks.findIndex(task => task.id === taskId);

  if (index === -1) return null;
  
  return Tasks.splice(index, 1);
};



/**
 * This function sets a property "userId" to null by each task a deleted user was related with
 * @param {string} id - id of the deleted user
 * @returns {void} 
 */
const unassignUser = async (id) => {

  Tasks.forEach((task, index) => {
    
    if (task.userId === id) {
      Tasks[index].userId = null;
    }
  });
};



/**
 * This function deletes all task which belonged to a deleted board
 * @param {string} boardId - id of the deleted board
 * @returns {void} 
 */
const deleteAllTasksByBoardId = async (boardId) => {
  Tasks = Tasks.filter(task => task.boardId !== boardId);
};



module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask, updateTask, deleteTask, unassignUser, deleteAllTasksByBoardId };
