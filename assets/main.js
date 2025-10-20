(function(){
  'use strict';

  var DEST_NUMBER_INTL = '244933908367';
  var SIGNUP_URL = 'https://clubesete.com/singup';
  var modalBackdrop = document.getElementById('leadModalBackdrop');
  var openBtn = document.getElementById('openModal');
  var cancelBtn = document.getElementById('cancelModal');
  var form = document.getElementById('leadForm');
  var nameInput = document.getElementById('nome');
  var whatsappInput = document.getElementById('whats');
  var consentInput = document.getElementById('consent');
  var errNome = document.getElementById('errNome');
  var errWhats = document.getElementById('errWhats');
  var toastEl = document.getElementById('toast');
  var lastFocused = null;
  var telemetry = {video:false};

  function showToast(message, duration){
    if(!toastEl){return;}
    toastEl.textContent = message || '';
    toastEl.style.display = 'block';
    setTimeout(function(){ toastEl.style.display = 'none'; }, duration || 1800);
  }

  function toggleModal(open){
    if(!modalBackdrop){return;}
    modalBackdrop.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
    if(open){
      lastFocused = document.activeElement;
      setTimeout(function(){ nameInput && nameInput.focus(); }, 120);
    } else if(lastFocused){
      lastFocused.focus();
    }
  }

  function normalizePhone(value){
    return (value || '').replace(/[^\d+]/g, '');
  }

  function clearErrors(){
    if(errNome){ errNome.textContent = ''; }
    if(errWhats){ errWhats.textContent = ''; }
  }

  function setError(field, message){
    field.textContent = message;
  }

  function validate(){
    clearErrors();
    var nome = (nameInput.value || '').trim();
    var numero = normalizePhone(whatsappInput.value);
    whatsappInput.value = numero;
    var valid = true;

    if(nome.length < 3){
      setError(errNome, 'Informe um nome válido (mín. 3 caracteres).');
      if(valid){ nameInput.focus(); }
      valid = false;
    }

    if(!/^\+244\d{8,}$/.test(numero)){
      setError(errWhats, 'Informe um WhatsApp válido começando com +244.');
      if(valid){ whatsappInput.focus(); }
      valid = false;
    }

    if(!consentInput.checked){
      showToast('É necessário autorizar o tratamento dos dados.');
      if(valid){ consentInput.focus(); }
      valid = false;
    }

    return {ok: valid, nome: nome, numero: numero};
  }

  function getUTMs(){
    var params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || ''
    };
  }

  function handleSubmit(event){
    event.preventDefault();
    var result = validate();
    if(!result.ok){
      return;
    }

    var utm = getUTMs();
    var mensagem = [
      'Novo Lead - Clube Sete',
      'Nome: ' + result.nome,
      'WhatsApp: ' + result.numero,
      'UTM: ' + [
        'src=' + utm.utm_source,
        'med=' + utm.utm_medium,
        'camp=' + utm.utm_campaign,
        'term=' + utm.utm_term,
        'cont=' + utm.utm_content
      ].join(' | ')
    ].join('\n');

    console.debug('form_submit_click');
    showToast('Abrindo WhatsApp…', 1600);

    var encoded = encodeURIComponent(mensagem);

    try {
      console.debug('whatsapp_open_app');
      window.location.href = 'whatsapp://send?phone=' + DEST_NUMBER_INTL + '&text=' + encoded;
    } catch (err) {
      // Ignore failures, fallback will handle
    }

    setTimeout(function(){
      console.debug('whatsapp_open_web');
      window.open('https://wa.me/' + DEST_NUMBER_INTL + '?text=' + encoded, '_blank', 'noopener,noreferrer');
    }, 700);

    setTimeout(function(){
      console.debug('redirect_signup');
      window.location.href = SIGNUP_URL;
    }, 2500);
  }

  function dismissModal(){
    toggleModal(false);
    clearErrors();
  }

  if(openBtn){
    openBtn.addEventListener('click', function(){
      console.debug('cta_click');
      toggleModal(true);
    });
  }

  if(cancelBtn){
    cancelBtn.addEventListener('click', dismissModal);
  }

  if(modalBackdrop){
    modalBackdrop.addEventListener('click', function(event){
      if(event.target === modalBackdrop){
        dismissModal();
      }
    });
  }

  document.addEventListener('keydown', function(event){
    if(event.key === 'Escape' && modalBackdrop && modalBackdrop.getAttribute('aria-hidden') === 'false'){
      dismissModal();
    }
  });

  if(form){
    form.addEventListener('submit', handleSubmit);
  }

  var video = document.getElementById('apresentacao');
  if(video){
    var logVideo = function(){
      if(!telemetry.video){
        console.debug('video_autoplay_start');
        telemetry.video = true;
      }
    };
    video.addEventListener('playing', logVideo, {once:true});
    video.addEventListener('loadeddata', logVideo, {once:true});
  }
})();
