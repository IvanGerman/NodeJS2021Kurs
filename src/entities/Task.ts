import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import {v4 as uuid} from 'uuid';



@Entity({ name: 'tasks' })
export class TaskEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 64, default: '' })
  title: string;

  @Column('integer', { default: 0 })
  order: number;

  @Column('varchar', { length: 64, default: '' })
  description: string;

  @Column('varchar', { length: 64, default: null, nullable: true })
  userId: string | null;

  @Column('varchar', { length: 64, default: null, nullable: true })
  boardId: string | null;

  @Column('varchar', { length: 64, default: null, nullable: true })
  columnId: string | null;

}