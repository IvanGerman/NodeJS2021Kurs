// const Board = require("./board.model");

const Boards = [
    {
        'id': 'boardId1',
        'title': 'Board1',
        'columns': [
          {
            'id': 'columnId1',
            'title': 'Column1',
            'order': 0
          }
        ]
    },
    {
        'id': 'boardId2',
        'title': 'Board2',
        'columns': [
          {
            'id': 'columnId2',
            'title': 'Column2',
            'order': 1
          }
        ]
    }
];
// Boards.push( new Board(), new Board(), new Board() );

module.exports = Boards ;