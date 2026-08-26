function faq(){
  title.textContent='FAQ';
  view.innerHTML=`<section class="panel"><div class="section-title"><h3>FAQ — FÊNIX Marketing AI</h3><span class="pill">Acesso e operação</span></div>
  <div style="display:grid;gap:10px;margin-top:16px">
    <details open><summary><b>Qual é o usuário MASTER?</b></summary><p>O e-mail MASTER é <code>agenciafenixwarriors@gmail.com</code>. Senhas não são exibidas dentro do aplicativo.</p></details>
    <details><summary><b>O que acontece no primeiro acesso?</b></summary><p>Quando a conta estiver marcada como acesso provisório, o sistema bloqueia o painel e exige a criação de uma nova senha antes de liberar os módulos.</p></details>
    <details><summary><b>Quais são as regras da nova senha?</b></summary><p>Use pelo menos 10 caracteres, incluindo letra maiúscula, letra minúscula, número e símbolo.</p></details>
    <details><summary><b>Como recuperar a senha?</b></summary><p>Na tela de login, toque em <b>Esqueci minha senha</b>. Verifique a caixa de entrada e o spam. O link enviado é temporário e de uso único. Se solicitar várias vezes em sequência, o Supabase pode aplicar limite temporário.</p></details>
    <details><summary><b>Por que o reset anterior podia falhar?</b></summary><p>O fluxo anterior enviava uma URL de redirecionamento explícita. O Supabase só aceita destinos incluídos na configuração de URLs permitidas. A versão atual usa o fluxo padrão do projeto para evitar essa incompatibilidade.</p></details>
    <details><summary><b>Quais são os níveis de autonomia?</b></summary><p><b>Manual:</b> decisões exigem aprovação. <b>Assistido:</b> o sistema automatiza o trabalho operacional e pede aprovação em pontos relevantes. <b>Autônomo:</b> executa o fluxo dentro das regras cadastradas.</p></details>
    <details><summary><b>O que o Diretor de Marketing IA faz?</b></summary><p>Gera estratégia, organiza prioridades e distribui tarefas para Social Media, Copywriter, Designer, Vídeo, CRM/Vendas, Analista e Compliance.</p></details>
    <details><summary><b>Como criar uma campanha?</b></summary><p>Cadastre um cliente, abra <b>Campanhas</b>, informe objetivo, meta, unidade, autonomia e data final. Ao executar, o orquestrador cria estratégia, tarefas e conteúdos vinculados à campanha.</p></details>
    <details><summary><b>Os dados ficam salvos?</b></summary><p>Sim. Clientes, campanhas, tarefas e conteúdos ficam persistidos no Supabase e protegidos por autenticação e políticas de acesso.</p></details>
    <details><summary><b>O Instagram publica automaticamente?</b></summary><p>A infraestrutura de publicação existe, mas a publicação real depende de conta Meta/Instagram conectada e autorizada por OAuth. Nenhuma integração externa pode funcionar sem autorização válida do serviço.</p></details>
    <details><summary><b>O que fazer se uma tela não carregar?</b></summary><p>Atualize a página, confirme a conexão com a internet e entre novamente. Se a sessão tiver expirado, o sistema solicitará novo login. Mensagens de erro aparecem no próprio painel.</p></details>
  </div></section>`;
}
routes.faq=faq;