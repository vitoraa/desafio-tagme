import { Ingredient } from "./Ingredient";
import { Step } from "./Step";

export interface Recipe {
  id: string
  name: string,
  description: string
  minutesToPrepare: number
  image: Image
  ingredients: Ingredient[]
  steps: Step[]
}

interface Image {
  small: string
  normal: string
}