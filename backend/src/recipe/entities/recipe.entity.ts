import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Ingredient } from "./ingredient.entity";
import { Step } from "./step.entity";

@Entity({ name: 'recipes' })
export class Recipe {
  @ObjectIdColumn()
  id: number;

  @Column({ type: 'string' })
  name: string;

  @Column({ type: 'string' })
  description: string

  @Column({ type: 'number' })
  minutesToPrepare: number

  @Column(type => Ingredient)
  ingredients: Ingredient[]

  @Column(type => Step)
  steps: Step[]
}
