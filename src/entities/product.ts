import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity({ name: 'product' })
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    name: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    mobileNumber: number;

    @Column({ nullable: true })
    email: string;
  

  }
  