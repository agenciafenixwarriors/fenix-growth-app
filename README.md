# FÊNIX Growth

Sistema operacional de crescimento orgânico, recrutamento e gestão de leads da Fênix Warriors.

## Produção

- App: `https://fenix-growth-app.vercel.app`
- Backend: Supabase (`sa-east-1`)
- Hospedagem: Vercel
- Custo operacional do MVP: infraestrutura gratuita utilizada no projeto

## Módulos concluídos

- Painel Executivo MASTER
- Centro de Operações Diário
- CRM de leads e follow-ups
- Gestão MASTER de ADMs
- Senha temporária + troca obrigatória no primeiro acesso
- Distribuição Inteligente de Leads
- SLA de primeiro atendimento
- Redistribuição automática de leads com SLA vencido
- Metas & Performance da Equipe
- Alertas individuais
- Motor de Conteúdo Orgânico
- Planejador Semanal Automático
- Plano de Hoje / Próxima Publicação
- Fila de execução: gravar → editar → publicar → distribuir → 24h → 48h
- Recomendador de conteúdo baseado em resultados
- Analytics por origem, campanha e UTM
- Formulário público de captação 18+ com consentimento
- Atribuição automática de leads e Hosts aos conteúdos UTM

## Automação de SLA

O Supabase executa `auto_redistribute_overdue_leads()` via `pg_cron` a cada 15 minutos. Leads sem primeiro contato após o SLA podem ser redistribuídos para outro ADM ativo, disponível e abaixo da capacidade definida. Todas as redistribuições são registradas em `lead_assignment_history`.

Configuração padrão inicial: SLA de 120 minutos, máximo de 2 redistribuições e redistribuição automática ativa. O MASTER pode alterar essas regras pela tela `sla.html`.

## Segurança

- RLS habilitado nas tabelas operacionais.
- Público não pode ler a base de leads.
- Formulário público aceita somente cadastros 18+ com autorização de contato.
- Funções `SECURITY DEFINER` internas não estão expostas a `anon`/`authenticated` quando não necessário.
- `service_role` permanece fora do navegador.
- Papéis administrativos são verificados em `app_metadata.role`.
- Operações privilegiadas de equipe usam Edge Function protegida.
- Auditoria final do Supabase: nenhum alerta novo de segurança criado pelo projeto; permanece apenas o aviso opcional de Leaked Password Protection do Auth.

## Diretriz de crescimento orgânico

O sistema não utiliza bots de follow/unfollow, spam, comentários automáticos em massa ou DMs não solicitadas. A estratégia é baseada em conteúdo, UTMs, análise de conversão, follow-up humano e melhoria contínua.

## Operação

Consulte `OPERATIONS.md` para o fluxo diário, semanal e mensal.
