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
import { Entity4 } from './Entity4';

@Entity()
export class Entity3 {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(t => Entity2, a => a.Entity3)

    Entity2: Entity2;
    @Column() name: string;

    @OneToMany(t => Entity4, entity4 => entity4.Entity3)
    @JoinColumn()
    Entity4: Entity4[];
}
