import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { subCategories } from './subCategories';
@Entity({ name: 'children_categories' })
export class childrenCategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => subCategories, (subCategories) => subCategories.childrenCategories)
  subCategories: subCategories[];
}
