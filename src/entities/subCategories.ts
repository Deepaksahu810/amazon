import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { childrenCategories } from './childrenCategories';
import { masterCategories } from './masterCategories';

@Entity({ name: 'sub_categories' })
export class subCategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => childrenCategories, (childrenCategories) => childrenCategories.subCategories)
  childrenCategories: childrenCategories;

  @OneToMany(() => masterCategories, (masterCategories) => masterCategories.subCategories)
  masterCategories: masterCategories[];
}
