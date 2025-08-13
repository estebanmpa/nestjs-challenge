import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';

const getEnvironmentVariables = (app: INestApplication) => {
  const config = app.get(ConfigService);
  const listenPort = config.get('listenPort');

  return { listenPort };
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { listenPort } = getEnvironmentVariables(app)

  app.setGlobalPrefix('api')

  await app.listen(listenPort);
}
bootstrap();
