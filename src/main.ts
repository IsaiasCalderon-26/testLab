import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Asegúrate de que esto coincide con el origen de tu frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Los métodos HTTP permitidos
    allowedHeaders: 'Content-Type,Authorization', // Cabeceras permitidas
    credentials: true, // Importante si estás usando cookies o autenticación basada en sesiones
  });
  await app.listen(3000);
}
bootstrap();