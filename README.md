# WiFi QR Code Generator

Um gerador simples de QR Codes para conexões WiFi.

## 📝 Descrição

Este projeto permite gerar QR Codes para compartilhar credenciais de WiFi de forma fácil e segura. Basta inserir o nome da rede, senha e tipo de segurança, e o sistema gera um QR Code que pode ser escaneado para conectar automaticamente.

## 🚀 Como usar

1. Abra o arquivo `index.html` no navegador
2. Preencha os campos:
   - **Nome da conexão**: Digite o SSID da rede WiFi
   - **Senha**: Digite a senha da rede
   - **Tipo de Segurança**: Selecione o protocolo de segurança (WPA, WEP, WPA2, etc.)
3. Clique em "Criar QR Code"
4. O QR Code será gerado com o nome da rede como título
5. Use o botão "Baixar QR Code" para salvar a imagem
6. Clique em "Criar Novo" para gerar outro QR Code

## 🛠️ Tecnologias

- HTML5
- JavaScript
- Bootstrap 5.3.8
- [QRCode.js](https://github.com/davidshimjs/qrcodejs)

## 📱 Funcionalidades

- ✅ Geração de QR Code para WiFi
- ✅ Suporte para diversos tipos de segurança
- ✅ Download da imagem do QR Code
- ✅ Nome personalizado do arquivo (wifi-NomeDaRede.png)
- ✅ Interface responsiva

## 📂 Estrutura

```
wifi_qrcode/
├── index.html      # Página principal
├── script.js       # Lógica do aplicativo
└── images/         # Pasta de imagens
    └── wqrcode.png # Logo do projeto
```

## 📄 Licença

Projeto de código aberto.
