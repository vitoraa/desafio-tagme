import { Column, Entity, ObjectIdColumn } from "typeorm";

export class Ingredient {
  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'number' })
  quantity: number;
}
