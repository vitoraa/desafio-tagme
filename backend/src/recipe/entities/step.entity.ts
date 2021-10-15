import { Column, Entity, ObjectIdColumn } from "typeorm";

export class Step {
  @Column({ type: 'number' })
  order: number;

  @Column({ type: 'string' })
  description: string;
}
