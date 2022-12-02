import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity({ name: 'users' })
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    username: string;
  
    @Column()
    password: string;

    @Column({ nullable: true })
    mobileNumber: number;

    @Column({ nullable: true })
    email: string;
  
  }
  