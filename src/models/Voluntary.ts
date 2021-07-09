import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('voluntaries')
  export default class Voluntary {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @CreateDateColumn()
    updated_at: Date;
  }
  