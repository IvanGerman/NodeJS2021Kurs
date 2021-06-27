"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { IUser } from './user.model';
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
const bcrypt = require('bcrypt');
// const Users: Array<IUser> = require('./user.dataBase');
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
const getAll = async () => {
    const userRepository = typeorm_1.getRepository(User_1.User);
    return userRepository.find();
};
/**
 * This function finds and returns an user by his id
 * @param {string} id - id of an user
 * @returns {user} user - returns Object of an user
 */
const getUserById = async (id) => {
    const userRepository = typeorm_1.getRepository(User_1.User);
    const res = await userRepository.findOne(id);
    if (res === undefined)
        return undefined;
    return res;
};
/**
 * This function creates and returns a new created user
 * @param {user} user - user who should be created
 * @returns {user} user - returns Promise of a new created user
 */
const createNewUser = async (dto) => {
    console.log("dto: ", dto);
    const passwordHash = bcrypt.hashSync(dto.password, 10);
    console.log('passhash: ', passwordHash);
    dto.password = passwordHash;
    const userRepository = typeorm_1.getRepository(User_1.User);
    const newUser = userRepository.create(dto);
    const savedUser = userRepository.save(newUser);
    return savedUser;
};
/**
 * This function updates and returns an user
 * @param {string} id - id of an user
 * @param {user} newUserData - new values for users properties
 * @returns {user|null} user - returns the updated object of an user or null if the user was not found
 */
const updateUser = async (id, dto) => {
    const userRepository = typeorm_1.getRepository(User_1.User);
    const res = await userRepository.findOne(id);
    if (res === undefined)
        return null;
    await userRepository.update(id, dto);
    const updatedUser = await userRepository.findOne(id);
    // @ts-ignore
    return updatedUser;
};
/**
 * This function deletes an user by his id
 * @param {string} id id of an user
 * @returns {user|null} user - returns deleted user
 */
const deleteUser = async (id) => {
    const userRepository = typeorm_1.getRepository(User_1.User);
    const res = await userRepository.findOne(id);
    if (res === undefined)
        return null;
    await userRepository.delete(id);
    return res;
};
module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };
