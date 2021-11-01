import { Column, Entity, ObjectIdColumn } from "typeorm";

export class Ingredient {
  @ObjectIdColumn()
  id: number;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'number' })
  quantity: number;
}
