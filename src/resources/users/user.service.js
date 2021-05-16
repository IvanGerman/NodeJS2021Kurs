const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getUserById = (id) => usersRepo.getUserById(id);

const createNewUser = (user) => usersRepo.createNewUser(user);

module.exports = { getAll, getUserById, createNewUser };
