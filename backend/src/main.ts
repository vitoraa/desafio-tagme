import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APIPrefix } from './constant/common';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(APIPrefix.Version);
  app.enableCors();
  const port = parseInt(process.env.SERVER_PORT);
  await app.listen(port);
}
bootstrap();
