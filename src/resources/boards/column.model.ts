//const { v4: uuidv4 } = require('uuid');
import { IBoard } from "./board.model";

export interface IColumn {
    id: string,
    title: string,
    order: number,
    board: IBoard
};

// class Column implements IColumn {

//     id: string;

//     title: string;

//     order: number;
    
//     constructor({  
//         id = uuidv4(),
//         title = 'COLUMN',
//         order = 0 } = {}) {

//         this.id = id;
//         this.title = title;
//         this.order = order;
//     }
// };
  
//module.exports = Column;