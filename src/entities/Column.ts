import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { BoardEntity } from './Board'
import { IColumn } from '../resources/boards/column.model';
// import {v4 as uuid} from 'uuid';

  
@Entity({ name: 'columns' })
export class ColumnOfBoard implements IColumn{
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('varchar', { length: 64, default: '' })
    title: string;
  
    @Column('integer', { default: 0 })
    order: number;
  
    @ManyToOne(() => BoardEntity, board => board.columns, {
        onDelete: 'CASCADE'
    
    })
    board: BoardEntity;
}
