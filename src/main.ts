import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const os = require("os");
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);


console.log(os.hostname());
  const url = await app.getUrl();
  console.log("Api URI - ",url);
}
bootstrap();
