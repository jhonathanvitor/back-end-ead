import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppDataSource } from "./database/data-souce";

// import "./database";

const app = express();

app.use(express.json());

AppDataSource.initialize().then(async () => {
    console.log("Database initialized");

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(router);

    app.listen(3333, () => console.log("🚀 Server is running!"));
});
