import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export interface Recipe {
  id: string
  name: string,
  description: string
  minutesToPrepare: number
  image: string
  ingredients: Ingredient[]
  steps: Step[]
}