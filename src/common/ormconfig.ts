import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';


// show dotenv the path to .env file
dotenv.config({
    path: path.join(__dirname, '../../.env')
});

export const config = {
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
} as ConnectionOptions;