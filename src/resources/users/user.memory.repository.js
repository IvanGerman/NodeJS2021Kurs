const Users = require('./user.dataBase');

/**
 * This function returns a list of users
 * @returns {Promise} - Array of all users
 */
const getAll = async () => Users;



const getUserById = async (id) => Users.find( user => user.id === id );



const createNewUser = async (user) => {

  Users.push(user);
  return user; // or getUserById(user.id);
};



const updateUser = async (id, newUserData) => {

  const index = Users.findIndex(user => user.id === id);

  if (index === -1) return null;

  const user = {...Users[index], ...newUserData, id};
  Users[index] = user;
  return user;
};



const deleteUser = async (id) => {

  const index = Users.findIndex(user => user.id === id);

  if (index === -1) return null;

  return Users.splice(index, 1);
};



module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };
