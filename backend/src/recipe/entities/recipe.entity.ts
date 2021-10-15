import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: 'recipes' })
export class Recipe {
  @ObjectIdColumn()
  id: number;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'string' })
  description: string
}
