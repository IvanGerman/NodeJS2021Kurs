import { ITask, TaskDTO } from './task.model';

const tasksRepo = require('./task.memory.repository');


const getTasksByBoardId = async (boardId: string): Promise<Array<ITask>> => {
  
  const tasks: Array<ITask> = await tasksRepo.getTasksByBoardId(boardId);
  if (tasks === undefined) throw new Error('Tasks not found');
  return tasks;
};



const getTaskByBoardAndTaskId = async(boardId: string, taskId: string): Promise<ITask> => {
    const task: ITask = await tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
    if (task === undefined) throw new Error('Task not found');
    return task;
};



const createNewTask = async(task: ITask): Promise<ITask> => {
  const newTask: ITask = await tasksRepo.createNewTask(task);
  if (newTask === undefined) throw new Error('Task was not created');
  return newTask;
};



const updateTask = async(boardId: string, taskId: string, newTaskData: TaskDTO): Promise<ITask> => {
  
  const updatingTask: ITask = await tasksRepo.updateTask(boardId, taskId, newTaskData);
  if (updatingTask === null) throw new Error('Task was not updated');
  return updatingTask;
};



const deleteTask = async(boardId: string, taskId: string): Promise<ITask> => {
  
  const deletingTask: ITask = await tasksRepo.deleteTask(boardId, taskId);
  if (deletingTask === null) throw new Error('Task was not deleted');
  return deletingTask;
};



const unassignUser = async(id: string): Promise<void> => {
  await tasksRepo.unassignUser(id);
};

const deleteAllTasksByBoardId = (id: string) => {  
  tasksRepo.deleteAllTasksByBoardId(id);
};



module.exports = { getTasksByBoardId, getTaskByBoardAndTaskId, createNewTask, updateTask, deleteTask, unassignUser, deleteAllTasksByBoardId };




export {};