import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log(`Server started... PORT: ${PORT}`);
  });
}
start();
