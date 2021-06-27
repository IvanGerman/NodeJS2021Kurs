const { v4: uuidv4 } = require('uuid');

export interface ITask {
  id: string;
  title: string;
  order: number;
  userId: string | null;
  boardId: string | undefined;
  columnId: string;
  description: string;
};

export type TaskDTO = Omit<ITask, 'id'>;


class Task implements ITask {

  id: string;

  title: string;

  order: number;

  userId: string | null;

  boardId: string | undefined;

  columnId: string;

  description: string;

  constructor({
    id = uuidv4(),
    title = 'TITLE',
    order = 0,
    description = 'description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId'
  }: ITask) {
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



export {};
