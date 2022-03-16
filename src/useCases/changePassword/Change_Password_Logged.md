# Change Password Logged

> ## Data

- ID do usuário a ser alterado
- New Password

> ## Primary Flow

1. Obter os dados do usuário logado
2. Verificar se pode executar a ação
3. Buscar dados do usuário a ser alterado
4. Alterar a senha

> ## Alternative Flow: Não autorizado a executar ação

3. Retornar erro informando que não e autorizado

> ## Alternative Flow: ID não encontrado

3.  Retornar erro informando que ID não foi encontrado
