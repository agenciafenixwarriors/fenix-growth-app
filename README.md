# FÊNIX Growth App

MVP do sistema de crescimento orgânico e recrutamento da Fênix Warriors.

## Módulos
- Dashboard
- Radar
- Content Factory
- Calendário
- Leads / CRM
- Formulário público com UTMs
- CRM administrativo seguro (`admin.html`)
- Configurações
- Persistência local para módulos internos
- Exportação de backup JSON

## Backend
O projeto usa Supabase para centralizar leads. A chave publicável pode ficar no frontend; chaves secretas ou `service_role` não devem ser expostas no navegador.

## Segurança
- RLS habilitado na tabela `public.leads`.
- Público pode apenas inserir leads elegíveis (18+ e consentimento).
- Leitura e atualização exigem usuário autenticado com `app_metadata.role` igual a `admin` ou `master`.
- Exclusão é reservada a `master`.
- Sem bots de follow/unfollow, comentários ou DMs automáticos em massa.
- Use apenas APIs e recursos oficiais das plataformas para publicação.
- Em abordagens feitas dentro da BIGO, siga o fluxo operacional da Família antes da Agência conforme as regras internas adotadas pela Fênix.

## Acesso administrativo
A página `admin.html` usa login por e-mail e senha via Supabase Auth. Usuários administrativos devem ser criados no Supabase Auth e receber o papel em `app_metadata`, nunca em `user_metadata`.

## Biblioteca Supabase
Frontend administrativo usa `@supabase/supabase-js` v2.111.0 fixada via CDN.
