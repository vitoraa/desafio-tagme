import { Controller, Get } from '@nestjs/common';
import { Recipe } from './entities/recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor (private readonly recipeService: RecipeService) { }

  @Get()
  async findAll (): Promise<Recipe[]> {
    return await this.recipeService.findAll();
  }
}
