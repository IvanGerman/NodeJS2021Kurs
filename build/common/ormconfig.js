"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// show dotenv the path to .env file
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env')
});
exports.config = {
    type: "postgres",
    synchronize: true,
    host: process.env['DB_HOST'],
    port: process.env['POSTGRES_PORT'],
    username: process.env['POSTGRES_USER'],
    password: process.env['POSTGRES_PASSWORD'],
    database: process.env['POSTGRES_DB_NAME'],
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectionInterval: 1000,
    entities: ['build/entities/**/*.js']
};
