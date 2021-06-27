import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// import {v4 as uuid} from 'uuid';

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 64, default: 'USER1' })
    name: string = '';

    @Column('varchar', { length: 64, default: 'user1' })
    login: string = '';

    @Column('varchar', { length: 128, default: 'password123' })
    password: string;
}

