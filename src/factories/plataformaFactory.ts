import IPlataforma from "../models/IPlataforma";
import Youtube from "../models/youtube";

export default class PlataformaFactory {
    static criarTransmissao(tipo: string): IPlataforma{
        const plataformaNormalized = tipo.trim().toLowerCase();

        switch (plataformaNormalized) {
            case "youtube":
                return new Youtube();
            case "twitch":
                return new Youtube();
            case "facebook":
                return new Youtube();
            default:
                throw new Error("🚨 Plataforma não suportada!");
        }
    }
}