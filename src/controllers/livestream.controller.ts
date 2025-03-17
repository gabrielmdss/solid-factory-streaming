import { Request, Response } from "express";
import PlataformaFactory from "../factories/plataformaFactory";

export default class LiveStreamController {
  public static start(req: Request, res: Response): any {
    const { plataforma } = req.body;

    try {
      const streaming = PlataformaFactory.criarTransmissao(plataforma);
      streaming.iniciarTransmissao();
      return res.json({ message: `Transmissão iniciada na plataforma ${plataforma}!` });
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  }
}
