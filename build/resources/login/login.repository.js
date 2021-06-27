"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../../entities/User");
const getUser = async (login) => {
    const userRepository = typeorm_1.getRepository(User_1.User);
    const user = await userRepository.findOne({ where: { login } });
    return user;
};
module.exports = { getUser };
