const { v4: uuidv4 } = require('uuid');

export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
};

class User {

  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'password'
  }: IUser ) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user; 
    return { id, name, login };       
  }
};

module.exports = User;

export {};
