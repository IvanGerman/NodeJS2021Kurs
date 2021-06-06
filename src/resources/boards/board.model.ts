import { IColumn } from './column.model';

const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model');

export interface IBoard {
  id: string;
  title: string;
  columns: Array<IColumn>
};



class Board implements IBoard {

  id: string;

  title: string;

  columns: Array<IColumn>;

  constructor({
    id = uuidv4(),
    title = 'BOARD',
    columns = [new Column()],
  }: IBoard) {

    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;



export {};