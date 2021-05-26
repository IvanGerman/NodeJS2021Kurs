let Tasks = require('./task.dataBase');


const getTasksByBoardId = async (boardId) => Tasks.filter(task => task.boardId === boardId);



const getTaskByBoardAndTaskId = async (boardId, taskId) => Tasks.find(task => task.boardId === boardId && task.id === taskId);



const createNewTask = async (task) => {
  Tasks.push(task);
  return task;
};



const updateTask = async (boardId, taskId, taskData) => {

  const index = Tasks.findIndex(task => task.boardId === boardId && task.id === taskId);

  if (index === -1) return null;

  const updatedTask = {...Tasks[index], ...taskData, id: taskId };
  Tasks[index] = updatedTask;
  return updatedTask;
};



const deleteTask = async (boardId, taskId) => {

  const index = Tasks.findIndex(task => task.id === taskId);

  if (index === -1) return null;
  
  return Tasks.splice(index, 1);
};



const unassignUser = async (id) => {

  Tasks.forEach((task, index) => {
    
    if (task.userId === id) {
      Tasks[index].userId = null;
    }
  });
};



const deleteAllTasksByBoardId = async (boardId) => {
  Tasks = Tasks.filter(task => task.boardId !== boardId);
  console.log('Tasks :   ', Tasks);
  // надо переделать потом на const Tasks вместо let Tasks
};



module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask, updateTask, deleteTask, unassignUser, deleteAllTasksByBoardId };
