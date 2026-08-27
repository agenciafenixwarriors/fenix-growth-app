window.requestPasswordRecovery=async function(){
  const email=(document.getElementById('loginEmail')?.value||'agenciafenixwarriors@gmail.com').trim().toLowerCase();
  const msg=document.getElementById('recoveryMsg');
  if(msg){msg.className='ok';msg.textContent='Enviando link seguro...';}
  const redirectTo='https://fenix-marketing-ai.vercel.app';
  const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo});
  if(error){
    if(msg){msg.className='danger';msg.textContent='Não foi possível enviar o link. '+(error.message||'Tente novamente em alguns minutos.');}
    return;
  }
  if(msg){msg.className='ok';msg.textContent='Solicitação enviada. Use apenas o e-mail mais recente. O link é temporário e de uso único.';}
};

(function handleRecoveryErrors(){
  const raw=(location.hash||'')+' '+(location.search||'');
  const params=new URLSearchParams((location.hash||'').replace(/^#/,''));
  const error=params.get('error')||new URLSearchParams(location.search).get('error');
  const code=params.get('error_code')||new URLSearchParams(location.search).get('error_code');
  if(error||/otp_expired|access_denied/i.test(raw)){
    setTimeout(()=>loginView(code==='otp_expired'?'O link de recuperação expirou ou já foi utilizado. Solicite um novo link e use somente o e-mail mais recente.':'O link de recuperação não é válido. Solicite um novo link.'),0);
    history.replaceState({},document.title,location.pathname);
  }
})();