import {
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Entity1 } from './Entity1';
import { Entity3 } from './Entity3';

@Entity()
export class Entity2 {
    @PrimaryGeneratedColumn()
    id: number;


    @Column() name: string;

    @OneToOne(t => Entity1, a => a.Entity2)
    Entity1: Entity1;

    @OneToOne(t => Entity3, a => a.Entity2)
    @JoinColumn()
    Entity3: Entity3;
}
