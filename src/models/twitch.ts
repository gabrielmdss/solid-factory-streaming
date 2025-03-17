import IPlataforma from "./IPlataforma";

export class Twitch implements IPlataforma {
    constructor() {
        this.configureRMTP();
        console.log("🎮📡 Twitch: 🚀 Transmissão foi iniciada! 🔴");
    }

    authToken(): void {
        console.log("🔑 Twitch: 🔓 Autorizando a aplicação!");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("⚙️ Twitch: 🎥 Configurando o broadcasting 🎙️");
    }

    iniciarTransmissao(): void {
        console.log("🎬 Twitch: 🎥 Transmissão AO VIVO!");
    }
}
