import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ColumnOfBoard } from './Column'; 
import { IBoard } from '../resources/boards/board.model';
// import {v4 as uuid} from 'uuid';

  
@Entity({ name: 'boards' })
export class BoardEntity implements IBoard{

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar', { length: 64, default: '' })
    title: string;
  
    @OneToMany(() => ColumnOfBoard, column => column.board, {
      cascade: true,
      eager: true
    })
    columns: ColumnOfBoard[];
}
