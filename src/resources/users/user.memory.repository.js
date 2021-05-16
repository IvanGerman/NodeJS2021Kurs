const User = require("./user.model");

const Users = [];
Users.push( new User(), new User(), new User() );

const getAll = async () => Users;

const getUserById = async (id) => Users.find( user => user.id === id );



const createNewUser = async (user) => {
  Users.push(user);
  return getUserById(user.id);
};

module.exports = { getAll, getUserById, createNewUser };
