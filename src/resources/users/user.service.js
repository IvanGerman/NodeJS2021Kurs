const usersRepo = require('./user.memory.repository');


const getAll = () => usersRepo.getAll();

const getUserById = (id) => {
    const user = usersRepo.getUserById(id);
    if (!user) {
        throw new Error('User not found');
    };
    return user;
};

const createNewUser = (user) => usersRepo.createNewUser(user);

module.exports = { getAll, getUserById, createNewUser };
