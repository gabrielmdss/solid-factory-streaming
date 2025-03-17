import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Live Streaming API",
      version: "1.0.0",
      description: "API para iniciar transmissões ao vivo usando o padrão Factory.",
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "Servidor Local",
      },
    ],
  },
  apis: ["./src/api/*.ts"], // Caminho onde as rotas estão definidas
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Swagger UI disponível em http://localhost:3001/api-docs");
};
