(function(){
  const originalLoginView=window.loginView;
  const MASTER_EMAIL='agenciafenixwarriors@gmail.com';
  const recoveryRedirect=()=>`${window.location.origin}${window.location.pathname}`;

  function recoveryLoginView(msg=''){
    title.textContent='Acesso';
    userLabel.textContent='';
    logoutBtn.style.display='none';
    view.innerHTML=`<section class="panel login"><h2>FÊNIX Marketing AI</h2><p>Entre com uma conta administrativa autorizada.</p><div class="formgrid"><div class="wide"><label>E-mail</label><input id="loginEmail" type="email" autocomplete="username" value="${esc(MASTER_EMAIL)}"></div><div class="wide"><label>Senha</label><input id="loginPassword" type="password" autocomplete="current-password"></div></div><div class="actions"><button onclick="login()">Entrar</button><button class="secondary" onclick="requestPasswordRecovery()">Esqueci minha senha</button></div><p class="mini">MASTER: ${esc(MASTER_EMAIL)}</p><p class="danger">${esc(msg)}</p><p id="recoveryMsg" class="ok"></p></section>`;
  }

  async function requestPasswordRecovery(){
    const email=(document.getElementById('loginEmail')?.value||MASTER_EMAIL).trim().toLowerCase();
    const msg=document.getElementById('recoveryMsg');
    if(msg) msg.textContent='Enviando link seguro...';
    const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:recoveryRedirect()});
    if(error){if(msg){msg.className='danger';msg.textContent='Não foi possível enviar o link: '+error.message;}return;}
    if(msg){msg.className='ok';msg.textContent='Link de recuperação enviado. Abra o e-mail e toque no link para criar uma nova senha.';}
  }

  function passwordChangeView(reason='Por segurança, crie uma nova senha antes de continuar.'){
    title.textContent='Nova senha';
    userLabel.textContent=session?.user?.email||'';
    logoutBtn.style.display='inline-block';
    logoutBtn.onclick=logout;
    view.innerHTML=`<section class="panel login"><h2>Crie sua nova senha</h2><p>${esc(reason)}</p><div class="formgrid"><div class="wide"><label>Nova senha</label><input id="newPassword" type="password" autocomplete="new-password" minlength="10"></div><div class="wide"><label>Confirmar nova senha</label><input id="confirmPassword" type="password" autocomplete="new-password" minlength="10"></div></div><div class="actions"><button onclick="saveNewPassword()">Salvar nova senha</button></div><p id="passwordChangeMsg"></p></section>`;
  }

  async function saveNewPassword(){
    const a=document.getElementById('newPassword')?.value||'';
    const b=document.getElementById('confirmPassword')?.value||'';
    const msg=document.getElementById('passwordChangeMsg');
    if(a.length<10){msg.className='danger';msg.textContent='Use pelo menos 10 caracteres.';return;}
    if(a!==b){msg.className='danger';msg.textContent='As senhas não coincidem.';return;}
    if(!/[A-Z]/.test(a)||!/[a-z]/.test(a)||!/[0-9]/.test(a)){msg.className='danger';msg.textContent='Use letras maiúsculas, minúsculas e números.';return;}
    setBusy(true);
    const {error}=await sb.auth.updateUser({password:a});
    if(error){setBusy(false);msg.className='danger';msg.textContent='Não foi possível alterar a senha: '+error.message;return;}
    const s=await getSession();
    try{
      const r=await fetch(`${cfg.url}/functions/v1/team-admin`,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${s.access_token}`,'apikey':cfg.publishableKey},body:JSON.stringify({action:'complete_password_change'})});
      if(!r.ok) throw new Error('Não foi possível concluir a atualização do primeiro acesso.');
      await sb.auth.refreshSession();
    }catch(e){setBusy(false);msg.className='danger';msg.textContent='Senha alterada. Entre novamente para concluir o acesso.';return;}
    setBusy(false);
    history.replaceState({},document.title,window.location.pathname);
    toast('Senha atualizada com sucesso.');
    await window.boot();
  }

  const originalBoot=window.boot;
  async function secureBoot(){
    const s=await getSession();
    if(!s) return recoveryLoginView();
    session=s;
    const role=s.user?.app_metadata?.role;
    if(!['master','admin','adm','MASTER','ADMIN','ADM'].includes(role)){await sb.auth.signOut();return recoveryLoginView('Conta sem permissão administrativa.');}
    const isRecovery=window.location.hash.includes('type=recovery')||new URLSearchParams(window.location.search).get('type')==='recovery';
    if(isRecovery||s.user?.app_metadata?.must_change_password===true) return passwordChangeView(isRecovery?'Defina uma nova senha para recuperar o acesso.':'Esta conta exige troca de senha no primeiro acesso.');
    return originalBoot();
  }

  window.loginView=recoveryLoginView;
  window.requestPasswordRecovery=requestPasswordRecovery;
  window.passwordChangeView=passwordChangeView;
  window.saveNewPassword=saveNewPassword;
  window.boot=secureBoot;

  sb.auth.onAuthStateChange((event,newSession)=>{
    if(event==='PASSWORD_RECOVERY'){
      session=newSession;
      setTimeout(()=>passwordChangeView('Defina uma nova senha para recuperar o acesso.'),0);
    }
  });

  setTimeout(()=>secureBoot(),0);
})();