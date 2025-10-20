# vendinha7

Landing page minimalista do Clube Sete com captura de leads via WhatsApp Cloud API.

## Estrutura

- `index.html` — Landing page com vídeo, benefícios, CTA e modal de captura.
- `assets/styles.min.css` — Estilos minificados e responsivos, usando fontes locais.
- `assets/main.js` — Lógica do modal, validações, telemetria e integração com o endpoint `/api/lead`.
- `api/lead.php` — Endpoint PHP responsável por receber os dados, validar e encaminhar ao WhatsApp Cloud API.

## Como executar

```bash
php -S localhost:8080
```

A página ficará disponível em `http://localhost:8080/index.html`.

## Configuração do WhatsApp Cloud API

Defina as variáveis de ambiente antes de iniciar o servidor PHP:

```bash
export WHATSAPP_TOKEN="<seu-token>"
export WHATSAPP_PHONE_ID="<seu-phone-id>"
```

O endpoint enviará uma mensagem de texto para `+244925521667` com as informações coletadas (nome, número e parâmetros UTM). Caso as variáveis não estejam configuradas, o envio é ignorado e registrado em log, mas a resposta ao cliente continua sendo de sucesso para manter o fluxo da landing page.
