import { Router } from "express";
import LiveStreamController from "../controllers/livestream.controller";

const router = Router();

/**
 * @swagger
 * /api/livestream:
 *   post:
 *     summary: Inicia uma transmissão ao vivo
 *     description: Permite iniciar uma live em uma plataforma específica.
 *     tags:
 *       - LiveStream
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               plataforma:
 *                 type: string
 *                 example: "youtube"
 *     responses:
 *       200:
 *         description: Transmissão iniciada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "🔑 YouTube: 🔓 Autorizando a aplicação!..."
 *       400:
 *         description: Plataforma não suportada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "🚨 Plataforma não suportada!"
 */
router.post("/livestream", LiveStreamController.start);

export default router;
