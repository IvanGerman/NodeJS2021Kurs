//import { IUser } from './user.model';
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';  
import { UserDTO } from './user.model';

//const Users: Array<IUser> = require('./user.dataBase');

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
const getAll = async (): Promise<Array<User> | undefined> => {
  const userRepository = getRepository(User);
  return userRepository.find({where: {}}) ;
};



/**
 * This function finds and returns an user by his id
 * @param {string} id - id of an user
 * @returns {user} user - returns Object of an user
 */
const getUserById = async (id: string): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  const res = await userRepository.findOne(id);
  if (res === undefined) return undefined;
  return res;
};



/**
 * This function creates and returns a new created user
 * @param {user} user - user who should be created
 * @returns {user} user - returns Promise of a new created user
 */
const createNewUser = async (dto: UserDTO): Promise<User>  => { 
  const userRepository = getRepository(User);
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
const updateUser = async (id: string, dto: UserDTO): Promise<User | null> => {
  const userRepository = getRepository(User);
  const res = await userRepository.findOne(id);
  if (res === undefined) return null;
  const updateRes = await userRepository.update(id, dto);
  return updateRes.raw;
};


/**
 * This function deletes an user by his id
 * @param {string} id id of an user
 * @returns {user|null} user - returns deleted user
 */
const deleteUser = async (id: string): Promise<User | null> => {
  const userRepository = getRepository(User);
  const res = await userRepository.findOne(id);
  const deletionRes = await userRepository.delete(id);
  
  if (res === undefined) return null;
  if (deletionRes.affected) return res;
  return null;
};


module.exports = { getAll, getUserById, createNewUser, updateUser, deleteUser };



export {};