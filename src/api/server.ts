import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
import { setupSwagger } from "../../swagger";
import router from "./routes";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use("/api", router)

app.listen(PORT, () => console.log(`🎬 Servidor rodando na porta ${PORT}`));


