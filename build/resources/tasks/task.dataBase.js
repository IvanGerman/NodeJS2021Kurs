"use strict";
// const Task = require("./task.model");
const Tasks = [
    {
        'id': 'id1',
        'title': 'Task1',
        'order': 0,
        'description': 'Description1',
        'userId': 'userId1',
        'boardId': 'boardId1',
        'columnId': 'columnId1'
    },
    {
        'id': 'id2',
        'title': 'Task2',
        'order': 1,
        'description': 'Description2',
        'userId': 'userId2',
        'boardId': 'boardId1',
        'columnId': 'columnId1'
    },
    {
        'id': 'id3',
        'title': 'Task3',
        'order': 2,
        'description': 'Description3',
        'userId': 'userId3',
        'boardId': 'boardId2',
        'columnId': 'columnId2'
    }
];
// Tasks.push( new Task(), new Task() );
module.exports = Tasks;
