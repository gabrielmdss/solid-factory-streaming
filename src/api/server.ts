import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", routes)

app.listen(PORT, () => console.log(`🎬 Servidor rodando na porta ${PORT}`));


