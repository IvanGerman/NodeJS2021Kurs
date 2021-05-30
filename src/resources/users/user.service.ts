const usersRepo = require('./user.memory.repository.ts');
const tasksService = require('../tasks/task.service.ts');


const getAll = () => usersRepo.getAll();

const getUserById = (id) => {
    const user = usersRepo.getUserById(id);
    return user;
};

const createNewUser = (user) => usersRepo.createNewUser(user);

const updateUser = (id, newUserData) => usersRepo.updateUser(id, newUserData);

const deleteUser = (id) => {
    tasksService.unassignUser(id);
    return usersRepo.deleteUser(id);
  };


module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };
