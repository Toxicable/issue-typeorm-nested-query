import {
  OneToOne,
  Column,
  JoinColumn,
  OneToMany,
  ManyToOne,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Entity3 } from './Entity3';

@Entity()
export class Entity4 {

    @PrimaryGeneratedColumn()
    id: number;

    @Column() name: string;

    @ManyToOne(t => Entity3)
    Entity3: Entity3;
}
