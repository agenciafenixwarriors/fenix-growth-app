# Operação do FÊNIX Growth

## Rotina diária

1. Abrir `executive.html` para visão geral.
2. Abrir `ops.html` e zerar prioridades críticas.
3. Conferir `sla.html` para leads aguardando primeiro contato e SLA vencido.
4. Usar `distribution.html` para leads sem responsável ou redistribuição manual quando necessário.
5. Trabalhar leads no `admin.html`, registrar estágio, follow-up e observações.
6. Executar a pauta em `content.html`: gravar, editar, publicar, distribuir e registrar revisão 24h/48h.
7. Conferir `alerts.html` antes de encerrar o dia.

## Rotina semanal

1. Gerar a próxima semana no Motor de Conteúdo.
2. Revisar `analytics.html` para canais, campanhas e UTMs que mais geraram leads/Hosts.
3. Repetir temas vencedores com novo ângulo.
4. Conferir carga/capacidade dos ADMs em Distribuição.
5. Revisar ranking e produtividade em Performance.

## Rotina mensal

1. MASTER define metas por ADM em `performance.html`.
2. Revisar funil Lead → Família → Candidato → Host.
3. Ajustar capacidade dos ADMs.
4. Revisar SLA de atendimento; padrão inicial: 120 minutos.
5. Comparar conteúdos por leads e Hosts, não apenas views.
6. Arquivar aprendizados e atualizar campanhas UTM.

## SLA

- Job de banco: `fenix_growth_sla_redistribution`.
- Frequência: a cada 15 minutos.
- Lead elegível: possui responsável, ainda sem primeiro contato, prazo vencido, estágio não final e abaixo do limite de redistribuições.
- Novo responsável: ADM ativo, aceitando leads e abaixo da capacidade.
- Histórico: `lead_assignment_history`.

## Segurança operacional

- Nunca colocar `service_role` no frontend.
- Nunca transformar `user_metadata` em fonte de autorização; usar `app_metadata.role`.
- ADMs inativos devem ter acesso desativado pela tela Equipe.
- Não exportar ou compartilhar a base de leads fora da operação autorizada.
- O formulário público exige confirmação 18+ e consentimento.
- Não usar bots de spam, follow/unfollow ou DMs automáticas em massa.

## Links

- App: https://fenix-growth-app.vercel.app
- Executivo: https://fenix-growth-app.vercel.app/executive.html
- CRM: https://fenix-growth-app.vercel.app/admin.html
- Formulário: https://fenix-growth-app.vercel.app/form.html
- Conteúdo: https://fenix-growth-app.vercel.app/content.html
- Analytics: https://fenix-growth-app.vercel.app/analytics.html
- SLA: https://fenix-growth-app.vercel.app/sla.html
- Distribuição: https://fenix-growth-app.vercel.app/distribution.html
