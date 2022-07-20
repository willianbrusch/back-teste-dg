import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("persons")
export class Person {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birth_date: string;
}
