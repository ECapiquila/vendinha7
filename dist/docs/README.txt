Vantour Angola – Landing de Conversão Multilíngue
=================================================

Visão geral
-----------
Este pacote contém a landing page estática "Vantour Angola" pronta para publicação em hospedagens simples (Hostinger, cPanel, S3, etc.). Todo o código usa HTML5, CSS puro e JavaScript vanilla, sem dependências externas.

Estrutura de pastas
-------------------
/dist/
  ├─ index.html
  ├─ /assets/
  │    ├─ styles.css
  │    ├─ script.js
  │    ├─ og-vantour.svg
  │    └─ favicon.svg
  └─ /docs/
       └─ README.txt (este arquivo)

Publicação rápida (Hostinger / cPanel)
-------------------------------------
1. Compacte a pasta `dist/` manualmente (ex.: `zip -r Vantour-Landing.zip dist/`).
2. No painel da hospedagem, acesse o Gerenciador de Arquivos e entre no diretório público (ex.: `public_html`).
3. Envie o conteúdo da pasta `dist/` para o servidor, mantendo a mesma estrutura de arquivos.
4. Se necessário, ajuste permissões para leitura (644 arquivos / 755 pastas).
5. Teste a URL final e confirme que `index.html` carrega com o layout completo.

Variáveis e ajustes rápidos
---------------------------
- **WHATSAPP_PHONE (obrigatório)**: defina o telefone no formato internacional sem `+`. Localize a constante `WHATSAPP_PHONE` em `assets/script.js`.
- **EXCHANGE_RATE_AOA_PER_USD (opcional)**: taxa de câmbio padrão 900. Ajuste a constante em `assets/script.js` para recalcular os valores aproximados em USD.
- **BASE_URL (opcional)**: atualize a constante em `assets/script.js` para refletir a URL final (ex.: `https://vantour.ao/landing`). As tags canonical, OG e hreflang usam este valor.
- **PIXEL_ID / GA4_ID (opcionais)**: remova os comentários das seções correspondentes em `index.html` e substitua pelos IDs reais para ativar o Meta Pixel e o GA4.
- **BASE_URL_ORIGIN** não requer ajuste manual; é calculado automaticamente a partir de `BASE_URL`.

Imagens e mídia
---------------
- **og-vantour.svg**: imagem OG padrão (1200x630). Substitua o arquivo em `/assets/` mantendo o mesmo nome para atualizar o compartilhamento social ou gere uma nova arte vetorial.
- **favicon.svg**: ícone em vetor otimizado. Pode ser trocado por outro `.svg` com o mesmo nome.
- **Imagem Hero**: hospedada no Unsplash. Para trocar, edite a URL do `<img>` no bloco Hero dentro de `index.html`.
- **Vídeo YouTube**: o embed usa o ID `dQw4w9WgXcQ` como placeholder. Substitua esse ID no atributo `src` do `<iframe>` para usar outro vídeo.

Mensagens de WhatsApp
---------------------
- O sistema gera mensagens multilíngues pré-preenchidas com base no parâmetro `lc` (`pt-br`, `en`, `de`).
- Para destacar um pacote específico, use o parâmetro `pkg` (ex.: `&pkg=luanda-city-tour`). A mensagem será adaptada automaticamente utilizando esse slug.
- Os formulários e CTAs enviam automaticamente a string `Ref: utm_source=...&utm_medium=...` com todos os parâmetros UTM e demais campos relevantes.

UTMs recomendadas
-----------------
Modelo base para campanhas:
`?utm_source=meta&utm_medium=cpc&utm_campaign=va_launch_2025&utm_content={country}-{adset}-{creative}&utm_term={interest}&lc={pt-br|en|de}&pkg={slug}`

Sugestões de nomenclatura (campanhas Meta):
- Campanhas (Tráfego → Mensagens): `VA_LAUNCH_2025_C01_META_TRAFFIC`, `VA_LAUNCH_2025_C01_META_MESSAGES`
- Conjuntos de anúncios: `AS_{PAIS}_{IDIOMA}_{INTERESSE}_{PLACEMENTS}`
- Anúncios: `AD_{FORMATO}_{CRIATIVO}_{HOOK}`

Boas práticas de campanha
-------------------------
- **Segmentação**: Brasil, Estados Unidos, Canadá, Alemanha e África do Sul com públicos interessados em turismo, viagens e cultura africana.
- **Metas sugeridas**:
  - CTR ≥ 1,5%
  - CPC ≤ R$ 3,00 / $0.60
  - CPL (lead via WhatsApp) ≤ R$ 18,00 / $3.50
- **Otimização**: monitore diariamente as UTMs no GA4 ou planilhas para ajustar criativos, idiomas e pacotes (usando `pkg`).

Checklist antes do go-live
--------------------------
1. Validar todos os links (CTAs, FAQ, vídeo, imagens) e garantir que abrem em nova aba com `noopener noreferrer`.
2. Conferir as tags hreflang (pt-br, en, de, x-default) e canonical apontando para a URL final.
3. Validar OG/Twitter usando o [Sharing Debugger do Meta](https://developers.facebook.com/tools/debug/) e o [Card Validator do Twitter](https://cards-dev.twitter.com/validator).
4. Executar um teste rápido no [PageSpeed Insights](https://pagespeed.web.dev/) para revisar performance.
5. Confirmar que o formulário abre o WhatsApp com os dados preenchidos e que a mensagem inclui a string `Ref: ...`.
6. Revisar o rastreamento: após inserir GA4/Pixel, testar o disparo com as ferramentas de debug correspondentes.

Suporte e manutenção
--------------------
- Ajuste traduções diretamente no objeto `i18n` em `assets/script.js`.
- Para adicionar novos tours ou depoimentos, replique o padrão dos cartões no `index.html` e inclua as traduções.
- Caso queira criar novas versões de idioma, adicione a chave no objeto `i18n`, no seletor de idioma e atualize as tags hreflang.

Bom lançamento e boas conversões! 🚀
