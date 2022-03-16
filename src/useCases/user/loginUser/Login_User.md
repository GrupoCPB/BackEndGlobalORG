# Logar Usuário

> ## Dados

- Email
- Senha

> ## Fluxo Primário

1. Receber os dados
2. Verificar existência de usuário com mesmo email
3. Comparar senha
4. Retornar token jwt e informações do usuário

> ## Fluxo Secundário: Email não cadastrado

3.  Retornar erro informando 'Usuário ou senha não encontrado'

> ## Fluxo Secundário: Email encontrado e senha invalida

4.  Retornar erro informando 'Usuário ou senha não encontrado'
