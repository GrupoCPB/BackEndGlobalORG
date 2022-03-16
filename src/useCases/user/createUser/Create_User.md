# Criar Usuário

> ## Dados

- Nome
- Email
- Senha
- Função

> ## Fluxo Primário

1. Receber os dados
2. Verificar existência de usuário com mesmo email
3. Salvar usuário no banco de dados
4. Retornar usuário criado sem a senha

> ## Fluxo Secundário: Email já cadastrado

3.  Retornar erro informando 'Usuário já cadastrado'
