window.requestPasswordRecovery=async function(){
  const email=(document.getElementById('loginEmail')?.value||'agenciafenixwarriors@gmail.com').trim().toLowerCase();
  const msg=document.getElementById('recoveryMsg');
  if(msg){msg.className='ok';msg.textContent='Enviando link seguro...';}
  const {error}=await sb.auth.resetPasswordForEmail(email);
  if(error){
    if(msg){msg.className='danger';msg.textContent='Não foi possível enviar o link. '+(error.message||'Tente novamente em alguns minutos.');}
    return;
  }
  if(msg){msg.className='ok';msg.textContent='Solicitação enviada. Verifique a caixa de entrada e o spam. O link é temporário e só pode ser usado uma vez.';}
};