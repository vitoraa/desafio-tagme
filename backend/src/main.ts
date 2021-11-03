import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIPrefix } from './constant/common';
import { environment } from './enviroment';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(APIPrefix.Version);
  app.enableCors();
  const port = parseInt(environment.serverPort);
  await app.listen(port);
}
bootstrap();
