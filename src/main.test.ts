import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { INestApplication } from "@nestjs/common";

describe("bootstrap", () => {
  it("should create and listen to the app", async () => {
    // Arrange
    const mockApp = {
      enableCors: jest.fn(),
      listen: jest.fn(),
    };
    const nestFactorySpy = jest
      .spyOn(NestFactory, "create")
      .mockResolvedValue(mockApp as unknown as INestApplication<any>);

    // Act
    await bootstrap();

    // Assert
    expect(nestFactorySpy).toHaveBeenCalledWith(AppModule);
    expect(mockApp.enableCors).toHaveBeenCalledWith({
      origin: 'http://localhost:3001',
      methods: 'GET,POST,PUT,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type,Authorization',
      credentials: true,
    });
    expect(mockApp.listen).toHaveBeenCalledWith(3000);
  });
});

function bootstrap() {
  throw new Error("Function not implemented.");
}
