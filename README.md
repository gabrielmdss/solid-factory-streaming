# 🎥 Sistema de Streaming Multiplataforma (Factory Method + SOLID)

Este projeto é um exemplo prático da aplicação do **Factory Method** e dos **princípios SOLID** em um sistema de transmissão ao vivo. Ele permite a criação dinâmica de serviços de streaming para diferentes plataformas, como **YouTube, Twitch e Facebook Live**.

---

## 📌 **Objetivo do Projeto**
O objetivo é demonstrar como aplicar **Factory Method** e os princípios **SOLID** de forma prática em um sistema real, garantindo código reutilizável, modular e escalável.

## 🛠️ **Conceitos Aplicados**
✔ **Factory Method** - Permite a criação dinâmica de serviços de streaming sem modificar o código principal.  
✔ **SOLID**:
- **S** - *Single Responsibility Principle* (SRP): Cada classe tem uma única responsabilidade.
- **O** - *Open/Closed Principle* (OCP): O código está aberto para extensão, mas fechado para modificação.
- **L** - *Liskov Substitution Principle* (LSP): Podemos substituir qualquer plataforma sem alterar o código principal.
- **I** - *Interface Segregation Principle* (ISP): Cada plataforma implementa apenas os métodos necessários.
- **D** - *Dependency Inversion Principle* (DIP): O código principal depende da abstração `IPlataforma`, e não de implementações concretas.

---

## 📂 **Estrutura do Projeto**
📂 src/ 
    ├── 📂 models/ # Modelos das plataformas de streaming 
        │ ├── IPlataforma.ts # Interface base para plataformas 
        │ ├── YouTube.ts # Implementação do YouTube 
        │ ├── Twitch.ts # Implementação do Twitch 
        │ ├── FacebookLive.ts # Implementação do Facebook Live 
    ── 📂 factories/ # Factory Method para criar plataformas dinamicamente 
        │ ├── PlataformaFactory.ts 
        │ ├── 📂 services/ # Serviço de gerenciamento de transmissão 
        │ ├── LiveStream.ts │ 
    ├── main.ts # Ponto de entrada do sistema


---

## 🚀 **Como Executar o Projeto?**

### **1️⃣ Instale o Node.js** (caso não tenha)
[Baixe o Node.js aqui](https://nodejs.org)

### **2️⃣ Configure o ambiente**
```bash
npm i
npm run build
```
## Execute o código 
```bash
npm run start
```

📌 Como Funciona?
1️⃣ O usuário escolhe a plataforma de transmissão (YouTube, Twitch ou Facebook Live).
2️⃣ O Factory Method cria dinamicamente a instância correta com base na escolha.
3️⃣ O sistema configura a transmissão e exibe as mensagens correspondentes.

Exemplo de saída ao escolher YouTube:

```bash
🔑 YouTube: 🔓 Autorizando a aplicação!
⚙️ YouTube: 📡 Configurando o broadcasting 🎙️
📺🎥 YouTube: 🚀 Transmissão foi iniciada! 🔴
🎬 Iniciando a transmissão na plataforma
```

🔧 Tecnologias Utilizadas
TypeScript - Tipagem estática e POO
Node.js - Execução do código TypeScript
SOLID + Factory Method - Boas práticas de design de software;

👨‍💻 Autor
Criado por https://github.com/gabrielmdss - Inspirado no conceito de Factory Method para aplicações reais.