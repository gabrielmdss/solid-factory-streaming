import { FacebookLive } from "../models/facebookLive";
import IPlataforma from "../models/IPlataforma";
import { Twitch } from "../models/twitch";
import Youtube from "../models/youtube";

export default class PlataformaFactory {
    static criarTransmissao(tipo: string): IPlataforma{
        const plataformaNormalized = tipo.trim().toLowerCase();

        switch (plataformaNormalized) {
            case "youtube":
                return new Youtube();
            case "twitch":
                return new Twitch();
            case "facebook":
                return new FacebookLive();
            default:
                throw new Error("🚨 Plataforma não suportada!");
        }
    }
}