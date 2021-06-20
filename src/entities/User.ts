import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//import {v4 as uuid} from 'uuid';

@Entity({name: 'user'})
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {length: 25})
    name: string = '';

    @Column('varchar', {length: 25})
    login: string = '';

    @Column('varchar', {nullable: true})
    password: string;
}

