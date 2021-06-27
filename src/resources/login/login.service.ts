// @ts-nocheck
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const loginRepo = require('./login.repository');

const createJWTtoken = (user) => {
  const accessToken = sign({ login: user.login, id: user.id }, "jwtsecret",  { expiresIn: 60 * 60 * 24 });
  return accessToken;
};

const createNewToken = async(userData) => {
  const { login, password } = userData;
  const user = await loginRepo.getUser(login);
  if(!user) { console.log("User does not exist in the data base!");
    return null;
  }; 

  const passwordHash = user.password;
  const match = bcrypt.compareSync(password, passwordHash);
  if(match) {
    const accessToken = createJWTtoken(user); console.log( accessToken );
    return accessToken;
  } else {
    return null
  };
};
  



module.exports = { createNewToken };

export {};