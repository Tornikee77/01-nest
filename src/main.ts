import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  // !Create the swagger configuration

  const config = new DocumentBuilder()
    .setTitle('NestJS blog API')
    .setDescription('Use the base url: http://localhost:300')
    .setTermsOfService('http://localhost:300/terms-of-service')
    .setLicense('MIT licens', 'http://localhost:300/')
    .addServer('http://localhost:300/')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
