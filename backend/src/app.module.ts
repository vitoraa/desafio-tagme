import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './database/config/ormconfig';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot(ormConfig()),
    RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
