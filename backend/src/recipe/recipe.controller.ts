import { Controller, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor (private readonly recipeService: RecipeService) { }

  @Get()
  findAll () {
    return this.recipeService.findAll();
  }
}
