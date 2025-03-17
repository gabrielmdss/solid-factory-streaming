import IPlataforma from "../models/IPlataforma";

export default class LiveStream {
  constructor(private plataforma: IPlataforma) {}
  iniciar(): void {
    console.log("🎬 Iniciando a transmissão na plataforma...");
    this.plataforma.iniciarTransmissao();
  }
}
