(function(){
  'use strict';

  var modal=document.getElementById('lead-modal');
  var openButton=document.getElementById('open-modal');
  var form=document.getElementById('lead-form');
  var nameInput=document.getElementById('lead-name');
  var whatsappInput=document.getElementById('lead-whatsapp');
  var consentInput=document.getElementById('lead-consent');
  var statusMessage=document.querySelector('.form-status');
  var video=document.getElementById('presentation-video');
  var telemetryEndpoint='/api/telemetry';
  var whatsappEndpoint='/api/lead';
  var redirectUrl='https://clubesete.com/singup';
  var telemetrySent={video:false};

  function setStatus(message){
    if(statusMessage){
      statusMessage.textContent=message||'';
    }
  }

  function sendTelemetry(eventName, details){
    var payload={event:eventName,timestamp:new Date().toISOString(),details:details||{}};
    try{
      if(navigator.sendBeacon){
        var blob=new Blob([JSON.stringify(payload)],{type:'application/json'});
        navigator.sendBeacon(telemetryEndpoint,blob);
      }else{
        fetch(telemetryEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).catch(function(){});
      }
    }catch(err){
      console.info('[telemetry]',payload,err);
    }
  }

  function toggleModal(open){
    if(!modal){return;}
    modal.setAttribute('aria-hidden',open?'false':'true');
    document.body.style.overflow=open?'hidden':'';
    if(open){
      setTimeout(function(){nameInput&&nameInput.focus();},120);
    }else{
      setStatus('');
    }
  }

  function extractUtm(){
    var params=new URLSearchParams(window.location.search);
    return{
      utm_source:params.get('utm_source')||'',
      utm_medium:params.get('utm_medium')||'',
      utm_campaign:params.get('utm_campaign')||''
    };
  }

  function validate(){
    var name=nameInput.value.trim();
    var whatsapp=whatsappInput.value.trim();
    if(name.length<3){
      setStatus('Informe um nome com pelo menos 3 caracteres.');
      nameInput.focus();
      return false;
    }
    if(!/^\+244\d{9}$/.test(whatsapp)){
      setStatus('Informe um WhatsApp válido iniciando com +244.');
      whatsappInput.focus();
      return false;
    }
    if(!consentInput.checked){
      setStatus('É necessário autorizar o tratamento dos dados para prosseguir.');
      consentInput.focus();
      return false;
    }
    return true;
  }

  function buildPayload(){
    var data=extractUtm();
    return{
      name:nameInput.value.trim(),
      whatsapp:whatsappInput.value.trim(),
      utm_source:data.utm_source,
      utm_medium:data.utm_medium,
      utm_campaign:data.utm_campaign
    };
  }

  function handleSubmit(event){
    event.preventDefault();
    if(!validate()){
      return;
    }
    setStatus('Enviando...');
    sendTelemetry('form_submitted');
    var payload=buildPayload();

    fetch(whatsappEndpoint,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    }).then(function(response){
      sendTelemetry('whatsapp_api_sent',{status:response.ok?'success':'error',code:response.status});
    }).catch(function(error){
      sendTelemetry('whatsapp_api_sent',{status:'error',message:error&&error.message?error.message:'network_error'});
    }).finally(function(){
      setStatus('Obrigado! Redirecionando...');
      setTimeout(function(){
        sendTelemetry('redirect_signup');
        window.location.href=redirectUrl;
      },1200);
    });
  }

  if(video){
    var onVideoStart=function(){
      if(!telemetrySent.video){
        sendTelemetry('video_autoplay_start');
        telemetrySent.video=true;
      }
    };
    video.addEventListener('playing',onVideoStart,{once:true});
    video.addEventListener('loadeddata',onVideoStart,{once:true});
  }

  if(openButton){
    openButton.addEventListener('click',function(){
      sendTelemetry('cta_click');
      toggleModal(true);
    });
  }

  document.addEventListener('click',function(event){
    if(event.target&&event.target.hasAttribute('data-dismiss')){
      toggleModal(false);
    }
  });

  document.addEventListener('keydown',function(event){
    if(event.key==='Escape'){
      toggleModal(false);
    }
  });

  if(form){
    form.addEventListener('submit',handleSubmit);
  }

  modal&&modal.setAttribute('aria-hidden','true');
})();
