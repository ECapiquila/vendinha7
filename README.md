# vendinha7

Landing page minimalista do Clube Sete para captação de leads via WhatsApp com redirecionamento automático para o cadastro oficial.

## Estrutura

- `index.html` — Landing page com hero, vídeo em autoplay, CTA e modal de captura.
- `assets/styles.min.css` — Estilos responsivos e minificados seguindo o layout minimalista solicitado.
- `assets/main.js` — Lógica do modal, validações, captura de UTMs e abertura do WhatsApp (app/web) sem backend.

## Como executar

Qualquer servidor estático atende o projeto. Um exemplo utilizando o PHP embutido:

```bash
php -S localhost:8080
```

A página ficará disponível em `http://localhost:8080/index.html`.

## Fluxo do lead

1. O visitante informa nome, WhatsApp e consentimento no modal.
2. Ao enviar, a página tenta abrir o aplicativo padrão usando `whatsapp://`.
3. Como fallback, abre o WhatsApp Web (`wa.me`) em nova aba.
4. Após alguns segundos o usuário é redirecionado automaticamente para `https://clubesete.com/singup`.

Os parâmetros UTM (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) presentes na URL são anexados à mensagem enviada.
