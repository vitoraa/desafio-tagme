import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {

  //TODO: desacoplar TypeORM
  constructor (
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) { }

  async findAll (): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }
}
