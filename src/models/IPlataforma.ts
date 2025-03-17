export default interface IPlataforma {
  authToken(): void;
  configureRMTP(): void;
  iniciarTransmissao(): void;
}
