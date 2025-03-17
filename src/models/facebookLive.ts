import IPlataforma from "./IPlataforma";

export class FacebookLive implements IPlataforma {
    constructor() {
        this.configureRMTP();
        console.log("📘📡 Facebook Live: 🚀 Transmissão foi iniciada! 🔴");
    }

    authToken(): void {
        console.log("🔑 Facebook Live: 🔓 Autorizando a aplicação!");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("⚙️ Facebook Live: 🎥 Configurando o broadcasting 🎙️");
    }

    iniciarTransmissao(): void {
        console.log("🎬 Facebook Live: 🎥 Transmissão AO VIVO!");
    }
}
