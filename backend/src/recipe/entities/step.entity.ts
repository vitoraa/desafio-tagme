import { Column, Entity, ObjectIdColumn } from "typeorm";

export class Step {
  @ObjectIdColumn()
  id: number;

  @Column({ type: 'number' })
  order: number;

  @Column({ type: 'string' })
  description: string;
}
