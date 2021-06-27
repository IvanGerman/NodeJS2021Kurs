// @ts-nocheck
import { getRepository } from 'typeorm';
import { User } from '../../entities/User';  


const getUser = async(login) => {
  
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { login } });
  return user;
};


module.exports = { getUser };



export {};