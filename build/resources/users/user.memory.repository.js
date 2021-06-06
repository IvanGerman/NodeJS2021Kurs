"use strict";
const Users = require('./user.dataBase');
/**
 * @typedef user
 * @type {Object}
 * @property {string} id - id of an user
 * @property {string} name - name of an user
 * @property {string} login - login of an user
 */
/**
 * This function returns a list of users
 * @returns {Array.<user>} Users - Array of all users
 */
const getAll = async () => Users;
/**
 * This function finds and returns an user by his id
 * @param {string} id - id of an user
 * @returns {user} user - returns Object of an user
 */
const getUserById = async (id) => Users.find(user => user.id === id);
/**
 * This function creates and returns a new created user
 * @param {user} user - user who should be created
 * @returns {user} user - returns new created user
 */
const createNewUser = async (user) => {
    Users.push(user);
    return user; // or getUserById(user.id);
};
/**
 * This function updates and returns an user
 * @param {string} id - id of an user
 * @param {user} newUserData - new values for users properties
 * @returns {user|null} user - returns the updated object of an user or null if the user was not found
 */
const updateUser = async (id, newUserData) => {
    const index = Users.findIndex(user => user.id === id);
    if (index === -1)
        return null;
    const user = { ...Users[index], ...newUserData, id };
    Users[index] = user;
    return user;
};
/**
 * This function deletes an user by his id
 * @param {string} id id of an user
 * @returns {user|null} user - returns deleted user
 */
const deleteUser = async (id) => {
    const index = Users.findIndex(user => user.id === id);
    if (index === -1)
        return null;
    return Users.splice(index, 1);
};
module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };
