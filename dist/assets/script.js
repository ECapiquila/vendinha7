(function(){
  const WHATSAPP_PHONE = '244952077902';
  const EXCHANGE_RATE_AOA_PER_USD = 900; // Ajuste este valor conforme necessário para atualização cambial.
  const BASE_URL = 'https://exemplo.vantour.ao/landing';

  const params = new URLSearchParams(window.location.search);
  const supportedLangs = ['pt-br', 'en', 'de'];
  const paramLang = (params.get('lc') || '').toLowerCase();
  const currentLang = supportedLangs.includes(paramLang) ? paramLang : 'pt-br';
  if (!params.has('lc')) {
    params.set('lc', currentLang);
  }
  document.documentElement.lang = currentLang;

  const i18n = {
    'pt-br': {
      metaTitle: 'Vantour Angola — Tours Autênticos e Experiências Únicas',
      metaDescription: 'City Tour Luanda, Kalandula Falls e pacotes personalizados com guias locais certificados. Reserve agora e viva Angola como nunca antes.',
      title: 'Viva Angola com experiências autênticas',
      subtitle: 'Descubra Luanda, Kalandula e o melhor da costa com especialistas locais.',
      badges: {
        safe: 'Seguro',
        guides: 'Guias Certificados',
        flex: 'Pagamento Flexível',
        cancel: 'Cancelamento Gratuito'
      },
      socialProof: '+3.200 viajantes felizes com a Vantour',
      ctaPrimary: 'Falar no WhatsApp',
      ctaHeroAria: 'Abrir conversa no WhatsApp',
      videoTitle: 'Experimente antes de embarcar',
      videoDescription: 'Assista ao vídeo e veja como é explorar Angola com guias especialistas.',
      videoButton: 'Quero reservar após ver o vídeo',
      videoCtaAria: 'Abrir conversa no WhatsApp após assistir ao vídeo',
      toursTitle: 'Pacotes em destaque',
      toursDescription: 'Selecione o tour ideal e personalize datas, tempo e atividades.',
      priceLabel: 'A partir de {price} AOA',
      tourLuanda: 'Descubra a capital com quem conhece cada canto. Cultura, história e sabores locais em um único dia.',
      tourKalandula: 'Acompanhe nossos guias até uma das maiores cataratas de África com conforto e segurança.',
      tourCabo: 'Relaxe na costa angolana com transporte, experiências gastronômicas e esportes aquáticos.',
      whyTitle: 'Por que escolher a Vantour?',
      whyLocal: 'Guias Locais',
      whyLocalDesc: 'Equipe apaixonada por Angola com certificações reconhecidas.',
      whyCustom: 'Experiências Personalizadas',
      whyCustomDesc: 'Roteiros sob medida para famílias, casais ou viajantes solo.',
      whySafe: 'Segurança Garantida',
      whySafeDesc: 'Transporte homologado, seguro viagem e suporte local.',
      whySupport: 'Suporte 24/7',
      whySupportDesc: 'Fale com a equipe em português, inglês ou alemão a qualquer hora.',
      testimonialsTitle: 'Histórias reais de viajantes',
      testimonial1Text: '“A Vantour organizou cada detalhe da minha viagem a Luanda. Experiência impecável!”',
      testimonial1Author: 'Ana Paula — Brasil',
      testimonial2Text: '“Guias profissionais e paisagens inesquecíveis. Voltarei com minha família.”',
      testimonial2Author: 'Michael — EUA',
      testimonial3Text: '“Guias competentes e atendimento excelente. Recomendo demais!”',
      testimonial3Author: 'Sabine — Alemanha',
      formTitle: 'Garanta sua cotação agora',
      formSubtitle: 'Preencha seus dados e receba o contato direto da nossa equipe pelo WhatsApp.',
      formNameLabel: 'Nome completo',
      formEmailLabel: 'E-mail',
      formPhoneLabel: 'Telefone',
      formTourLabel: 'Tour de interesse',
      formTourPlaceholder: 'Selecione um tour',
      formMessageLabel: 'Mensagem adicional',
      formSubmit: 'Enviar pelo WhatsApp',
      formSuccess: 'Formulário enviado! Abrimos uma conversa no WhatsApp com sua mensagem.',
      formError: 'Não foi possível abrir o WhatsApp. Verifique se o navegador permite pop-ups.',
      formValidation: 'Preencha os campos obrigatórios antes de enviar.',
      faqTitle: 'Perguntas frequentes',
      faq1Question: 'Quais idiomas a equipe atende?',
      faq1Answer: 'Atendemos em português, inglês e alemão para garantir a melhor experiência.',
      faq2Question: 'Os tours incluem transporte?',
      faq2Answer: 'Sim, todos os pacotes contam com transporte seguro e confortável, com motoristas certificados.',
      faq3Question: 'Posso personalizar o roteiro?',
      faq3Answer: 'Claro! Adaptamos as experiências conforme seu interesse, tempo disponível e orçamento.',
      faq4Question: 'Qual a política de cancelamento?',
      faq4Answer: 'Cancelamentos são gratuitos até 48h antes do tour, com reembolso integral.',
      fabAria: 'Abrir conversa no WhatsApp',
      tourOptionLuanda: 'Luanda City Tour',
      tourOptionKalandula: 'Kalandula Falls',
      tourOptionCabo: 'Cabo Ledo',
      formLeadIntro: 'Dados do lead:',
      formLeadName: 'Nome',
      formLeadEmail: 'E-mail',
      formLeadPhone: 'Telefone',
      formLeadTour: 'Tour',
      formLeadMessage: 'Mensagem'
    },
    'en': {
      metaTitle: 'Vantour Angola — Authentic Tours & Unique Experiences',
      metaDescription: 'Luanda City Tour, Kalandula Falls and custom packages with certified local guides. Book now and experience Angola like never before.',
      title: 'Experience Angola with authentic adventures',
      subtitle: 'Discover Luanda, Kalandula and the coast with expert local guides.',
      badges: {
        safe: 'Safe',
        guides: 'Certified Guides',
        flex: 'Flexible Payment',
        cancel: 'Free Cancellation'
      },
      socialProof: '3,200+ happy travelers with Vantour',
      ctaPrimary: 'Message on WhatsApp',
      ctaHeroAria: 'Open WhatsApp conversation',
      videoTitle: 'Feel it before you fly',
      videoDescription: 'Watch the video to see what it is like to explore Angola with expert guides.',
      videoButton: 'Reserve after watching the video',
      videoCtaAria: 'Open WhatsApp conversation after video',
      toursTitle: 'Featured packages',
      toursDescription: 'Pick the ideal tour and personalize dates, duration and activities.',
      priceLabel: 'Starting at {price} AOA',
      tourLuanda: 'See the capital with experts who know every corner. Culture, history and local flavors in one day.',
      tourKalandula: 'Travel with our guides to one of Africa’s largest waterfalls with comfort and safety.',
      tourCabo: 'Relax on the Angolan coast with transport, gastronomy and water sports.',
      whyTitle: 'Why choose Vantour?',
      whyLocal: 'Local Guides',
      whyLocalDesc: 'A passionate team with internationally recognized certifications.',
      whyCustom: 'Tailored Experiences',
      whyCustomDesc: 'Itineraries custom-made for families, couples or solo travelers.',
      whySafe: 'Safety Guaranteed',
      whySafeDesc: 'Licensed transportation, travel insurance and local support.',
      whySupport: '24/7 Support',
      whySupportDesc: 'Talk to our team in Portuguese, English or German anytime.',
      testimonialsTitle: 'Real stories from travelers',
      testimonial1Text: '“Vantour arranged every detail of my Luanda trip. Flawless experience!”',
      testimonial1Author: 'Ana Paula — Brazil',
      testimonial2Text: '“Professional guides and unforgettable landscapes. I’ll return with my family.”',
      testimonial2Author: 'Michael — USA',
      testimonial3Text: '“Skilled guides and outstanding service. Highly recommended!”',
      testimonial3Author: 'Sabine — Germany',
      formTitle: 'Get your quote now',
      formSubtitle: 'Fill in your details and our team will reach you on WhatsApp.',
      formNameLabel: 'Full name',
      formEmailLabel: 'Email',
      formPhoneLabel: 'Phone',
      formTourLabel: 'Tour of interest',
      formTourPlaceholder: 'Select a tour',
      formMessageLabel: 'Additional message',
      formSubmit: 'Send via WhatsApp',
      formSuccess: 'Form submitted! We opened WhatsApp with your message.',
      formError: 'We could not open WhatsApp. Please check pop-up permissions.',
      formValidation: 'Please fill out the required fields before submitting.',
      faqTitle: 'Frequently asked questions',
      faq1Question: 'Which languages does the team speak?',
      faq1Answer: 'We assist in Portuguese, English and German to ensure the best experience.',
      faq2Question: 'Is transportation included?',
      faq2Answer: 'Yes, every package includes safe and comfortable transportation with certified drivers.',
      faq3Question: 'Can I customize the itinerary?',
      faq3Answer: 'Absolutely! We tailor experiences to your interests, schedule and budget.',
      faq4Question: 'What is the cancellation policy?',
      faq4Answer: 'Cancellations are free up to 48 hours before the tour with a full refund.',
      fabAria: 'Open WhatsApp conversation',
      tourOptionLuanda: 'Luanda City Tour',
      tourOptionKalandula: 'Kalandula Falls',
      tourOptionCabo: 'Cabo Ledo',
      formLeadIntro: 'Lead information:',
      formLeadName: 'Name',
      formLeadEmail: 'Email',
      formLeadPhone: 'Phone',
      formLeadTour: 'Tour',
      formLeadMessage: 'Message'
    },
    'de': {
      metaTitle: 'Vantour Angola — Authentische Touren & Einzigartige Erlebnisse',
      metaDescription: 'Luanda City Tour, Kalandula Falls und individuelle Pakete mit zertifizierten lokalen Guides. Jetzt buchen und Angola neu erleben.',
      title: 'Erlebe Angola mit authentischen Abenteuern',
      subtitle: 'Entdecke Luanda, Kalandula und die Küste mit erfahrenen lokalen Guides.',
      badges: {
        safe: 'Sicher',
        guides: 'Zertifizierte Guides',
        flex: 'Flexible Zahlung',
        cancel: 'Kostenlose Stornierung'
      },
      socialProof: 'Über 3.200 zufriedene Reisende mit Vantour',
      ctaPrimary: 'WhatsApp-Nachricht',
      ctaHeroAria: 'WhatsApp-Unterhaltung öffnen',
      videoTitle: 'Erlebe es, bevor du fliegst',
      videoDescription: 'Sieh dir das Video an und entdecke, wie Angola mit Experten zu erleben ist.',
      videoButton: 'Nach dem Video reservieren',
      videoCtaAria: 'WhatsApp-Unterhaltung nach dem Video öffnen',
      toursTitle: 'Top-Angebote',
      toursDescription: 'Wähle die ideale Tour und personalisiere Termine, Dauer und Aktivitäten.',
      priceLabel: 'Ab {price} AOA',
      tourLuanda: 'Entdecke die Hauptstadt mit Experten, die jeden Winkel kennen. Kultur, Geschichte und lokale Küche an einem Tag.',
      tourKalandula: 'Reise mit unseren Guides zu einem der größten Wasserfälle Afrikas – komfortabel und sicher.',
      tourCabo: 'Entspanne an Angolas Küste mit Transport, Kulinarik und Wassersport.',
      whyTitle: 'Warum Vantour wählen?',
      whyLocal: 'Lokale Guides',
      whyLocalDesc: 'Ein leidenschaftliches Team mit anerkannten Zertifizierungen.',
      whyCustom: 'Individuelle Erlebnisse',
      whyCustomDesc: 'Maßgeschneiderte Routen für Familien, Paare oder Alleinreisende.',
      whySafe: 'Garantierte Sicherheit',
      whySafeDesc: 'Lizenzierte Transporte, Reiseversicherung und lokaler Support.',
      whySupport: 'Support rund um die Uhr',
      whySupportDesc: 'Sprich jederzeit mit unserem Team auf Portugiesisch, Englisch oder Deutsch.',
      testimonialsTitle: 'Echte Reiseberichte',
      testimonial1Text: '„Vantour hat jedes Detail meiner Luanda-Reise organisiert. Perfekte Erfahrung!“',
      testimonial1Author: 'Ana Paula — Brasilien',
      testimonial2Text: '„Professionelle Guides und unvergessliche Landschaften. Ich komme mit meiner Familie zurück.“',
      testimonial2Author: 'Michael — USA',
      testimonial3Text: '„Kompetente Guides und hervorragender Service. Sehr zu empfehlen!“',
      testimonial3Author: 'Sabine — Deutschland',
      formTitle: 'Sichere dir jetzt dein Angebot',
      formSubtitle: 'Fülle deine Daten aus und unser Team meldet sich per WhatsApp.',
      formNameLabel: 'Vollständiger Name',
      formEmailLabel: 'E-Mail',
      formPhoneLabel: 'Telefon',
      formTourLabel: 'Interessante Tour',
      formTourPlaceholder: 'Tour auswählen',
      formMessageLabel: 'Zusätzliche Nachricht',
      formSubmit: 'Über WhatsApp senden',
      formSuccess: 'Formular gesendet! Wir haben WhatsApp mit deiner Nachricht geöffnet.',
      formError: 'WhatsApp konnte nicht geöffnet werden. Bitte Pop-up-Einstellungen prüfen.',
      formValidation: 'Bitte fülle vor dem Absenden alle Pflichtfelder aus.',
      faqTitle: 'Häufige Fragen',
      faq1Question: 'Welche Sprachen spricht das Team?',
      faq1Answer: 'Wir betreuen dich auf Portugiesisch, Englisch und Deutsch für das beste Erlebnis.',
      faq2Question: 'Ist der Transport inklusive?',
      faq2Answer: 'Ja, jedes Paket umfasst sicheren und komfortablen Transport mit zertifizierten Fahrern.',
      faq3Question: 'Kann ich die Route anpassen?',
      faq3Answer: 'Natürlich! Wir passen die Erlebnisse an deine Interessen, Zeit und Budget an.',
      faq4Question: 'Wie lautet die Stornierungsrichtlinie?',
      faq4Answer: 'Kostenlose Stornierung bis 48 Stunden vor der Tour mit voller Rückerstattung.',
      fabAria: 'WhatsApp-Unterhaltung öffnen',
      tourOptionLuanda: 'Luanda City Tour',
      tourOptionKalandula: 'Kalandula Falls',
      tourOptionCabo: 'Cabo Ledo',
      formLeadIntro: 'Lead-Daten:',
      formLeadName: 'Name',
      formLeadEmail: 'E-Mail',
      formLeadPhone: 'Telefon',
      formLeadTour: 'Tour',
      formLeadMessage: 'Nachricht'
    }
  };

  const whatsappMessages = {
    'pt-br': 'Olá Vantour! Quero um orçamento para {pkg|um tour em Angola} nas datas: _____.',
    'en': 'Hello Vantour! I’d like a quote for {pkg|a tour in Angola} on these dates: _____.',
    'de': 'Hallo Vantour! Ich möchte ein Angebot für {pkg|eine Tour in Angola} an folgenden Daten: _____.'
  };

  function setMetaTags(langData) {
    document.title = langData.metaTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', langData.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', langData.metaTitle);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', langData.metaDescription);
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', langData.metaTitle);
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', langData.metaDescription);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', BASE_URL);
    document.querySelectorAll('link[rel="alternate"]').forEach((link) => {
      const hreflang = link.getAttribute('hreflang');
      if (hreflang === 'x-default') {
        link.setAttribute('href', BASE_URL);
      } else {
        link.setAttribute('href', `${BASE_URL}?lc=${hreflang}`);
      }
    });

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', BASE_URL);
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', `${BASE_URL}/assets/og-vantour.svg`);
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', `${BASE_URL}/assets/og-vantour.svg`);

    const ldJson = document.querySelector('script[type="application/ld+json"]');
    if (ldJson) {
      try {
        const data = JSON.parse(ldJson.textContent.trim());
        data.url = BASE_URL;
        data.telephone = `+${WHATSAPP_PHONE}`;
        ldJson.textContent = JSON.stringify(data, null, 2);
      } catch (error) {
        console.error('Erro ao atualizar JSON-LD', error);
      }
    }
  }

  function applyTranslations(langData) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = key.split('.').reduce((acc, part) => acc && acc[part], langData);
      if (typeof value === 'string') {
        el.textContent = value;
      }
    });

    const heroCta = document.getElementById('cta-hero');
    if (heroCta) heroCta.setAttribute('aria-label', langData.ctaHeroAria);
    const videoCta = document.getElementById('cta-video');
    if (videoCta) videoCta.setAttribute('aria-label', langData.videoCtaAria);
    const fab = document.getElementById('cta-fab');
    if (fab) fab.setAttribute('aria-label', langData.fabAria);

    const tourSelect = document.getElementById('tour');
    if (tourSelect) {
      const placeholder = tourSelect.querySelector('option[value=""]');
      if (placeholder) placeholder.textContent = langData.formTourPlaceholder;
      const optionLuanda = tourSelect.querySelector('option[value="luanda"]');
      if (optionLuanda) optionLuanda.textContent = langData.tourOptionLuanda;
      const optionKalandula = tourSelect.querySelector('option[value="kalandula"]');
      if (optionKalandula) optionKalandula.textContent = langData.tourOptionKalandula;
      const optionCabo = tourSelect.querySelector('option[value="cabo-ledo"]');
      if (optionCabo) optionCabo.textContent = langData.tourOptionCabo;
    }

    document.querySelectorAll('[data-price]').forEach((el) => {
      const priceValue = Number(el.getAttribute('data-price')) || 0;
      const formattedPrice = priceValue.toLocaleString(currentLang === 'de' ? 'de-DE' : currentLang === 'en' ? 'en-US' : 'pt-BR');
      const usd = priceValue / EXCHANGE_RATE_AOA_PER_USD;
      const usdFormatted = usd.toLocaleString(currentLang === 'de' ? 'de-DE' : 'en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      el.innerHTML = `${langData.priceLabel.replace('{price}', formattedPrice)} (<span class="price-usd">~$${usdFormatted}</span>)`;
    });
  }

  function buildRefString() {
    const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'lc', 'pkg'];
    return keys.map((key) => `${key}=${params.get(key) ? encodeURIComponent(params.get(key)) : '-'}`).join('&');
  }

  function applyPkgPlaceholder(message) {
    const pkgValue = params.get('pkg');
    return message.replace(/\{pkg\|([^}]+)\}/g, (_, fallback) => pkgValue ? pkgValue : fallback);
  }

  function buildWhatsappUrl(baseMessage) {
    const ref = buildRefString();
    const message = `${applyPkgPlaceholder(baseMessage)}\n\nRef: ${ref}`;
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
  }

  function openWhatsApp(url) {
    const newWindow = window.open(url, '_blank', 'noopener');
    if (!newWindow) {
      return false;
    }
    return true;
  }

  function trackLead(source) {
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'LeadClick', { source });
    }
    if (typeof gtag === 'function') {
      gtag('event', 'lead_click', { event_category: 'engagement', event_label: source });
    }
  }

  function attachWhatsappCtas() {
    const baseMessage = whatsappMessages[currentLang];
    const url = buildWhatsappUrl(baseMessage);
    const heroCta = document.getElementById('cta-hero');
    const videoCta = document.getElementById('cta-video');
    const fab = document.getElementById('cta-fab');

    if (heroCta) {
      heroCta.href = url;
      heroCta.addEventListener('click', () => trackLead('TopButton'));
    }
    if (videoCta) {
      videoCta.href = url;
      videoCta.addEventListener('click', () => trackLead('VideoCTA'));
    }
    if (fab) {
      fab.href = url;
      fab.addEventListener('click', () => trackLead('FAB'));
    }
  }

  function handleForm(langData) {
    const form = document.getElementById('lead-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const requiredFields = ['name', 'email', 'phone', 'tour'];
      const hasEmptyRequired = requiredFields.some((field) => !formData.get(field));
      if (hasEmptyRequired) {
        alert(langData.formValidation);
        return;
      }

      const baseMessage = whatsappMessages[currentLang];
      const leadDetails = [
        `${langData.formLeadIntro}`,
        `${langData.formLeadName}: ${formData.get('name')}`,
        `${langData.formLeadEmail}: ${formData.get('email')}`,
        `${langData.formLeadPhone}: ${formData.get('phone')}`,
        `${langData.formLeadTour}: ${formData.get('tour')}`,
        `${langData.formLeadMessage}: ${formData.get('message') || '-'}`
      ].join('\n');
      const ref = buildRefString();
      const finalMessage = `${applyPkgPlaceholder(baseMessage)}\n\n${leadDetails}\n\nRef: ${ref}`;
      const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(finalMessage)}`;
      const opened = openWhatsApp(url);
      trackLead('LeadForm');
      if (opened) {
        alert(langData.formSuccess);
        form.reset();
      } else {
        alert(langData.formError);
      }
    });
  }

  function setupFaq() {
    document.querySelectorAll('.faq__question').forEach((button) => {
      button.addEventListener('click', () => toggleFaq(button));
      button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggleFaq(button);
        }
      });
    });
  }

  function toggleFaq(button) {
    const answerId = button.getAttribute('aria-controls');
    const answer = document.getElementById(answerId);
    if (!answer) return;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    answer.hidden = isExpanded;
  }

  function updateYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  const langData = i18n[currentLang];
  setMetaTags(langData);
  applyTranslations(langData);
  attachWhatsappCtas();
  handleForm(langData);
  setupFaq();
  updateYear();
})();
