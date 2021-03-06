"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
;
class Task {
    constructor({ id = uuidv4(), title = 'TITLE', order = 0, description = 'description', userId = 'userId', boardId = 'boardId', columnId = 'columnId' }) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
}
module.exports = Task;
