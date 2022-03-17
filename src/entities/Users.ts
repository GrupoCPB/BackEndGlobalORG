import { IsEmail, IsIn, MinLength } from 'class-validator';
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { configRoles } from '@/config/roles';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
    id?: string;

  @Column()
    name: string;

  @Column()
  @IsEmail({ message: 'Invalid email address.' })
    email: string;

  @Column()
  @MinLength(8, { message: 'Invalid minimum quantity of characters.' })
    password: string;

  @Column()
  @IsIn(configRoles)
    role: string;

  @CreateDateColumn()
    created_at?: Date;

  @UpdateDateColumn()
    updated_at?: Date;
}
