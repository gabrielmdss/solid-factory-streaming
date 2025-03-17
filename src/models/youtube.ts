import IPlataforma from "./IPlataforma";

export default class Youtube implements IPlataforma {
    constructor() {
        this.configureRMTP();
        console.log("📺🎥 YouTube: 🚀 Transmissão foi iniciada! 🔴");
    }

    authToken(): void {
        console.log("🔑 YouTube: 🔓 Autorizando a aplicação!");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("⚙️ YouTube: 📡 Configurando o broadcasting 🎙️");
    }

    iniciarTransmissao(): void {
        console.log("🎬 YouTube: 🎥 Transmissão AO VIVO!");
    }
}