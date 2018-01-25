import {
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Entity2 } from './Entity2';

@Entity()
export class Entity1 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column() name: string;

    @OneToOne(t => Entity2, a => a.Entity1)
    @JoinColumn()
    Entity2: Entity2;
}
