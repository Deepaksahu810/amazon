import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  import { subCategories } from './subCategories';
  
  @Entity({ name: 'master_categories' })
  export class masterCategories {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ unique: true })
    name: string;
  
    @ManyToOne(() => subCategories, (subCategories) => subCategories.masterCategories)
    subCategories: subCategories;
  }
  