"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
const loggingMiddleware = require('./middlewares/loggingMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggingMiddleware);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use(errorMiddleware);
module.exports = app;
