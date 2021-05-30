const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model.ts');

class Board {
  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = [new Column()],
  } = {}) {

    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;