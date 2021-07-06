# globalorg-api-backend

## Começando

### Requerimentos

- Tenha o [Docker](https://www.docker.com/get-started) instalado e rodando.

**Clone o projeto e acesse a pasta**

```bash
git clone https://github.com/GrupoCPB/globalorg-api-backend.git && cd globalorg-api-backend
```

**Siga os passos**

- Com docker rodando use o comando para criar a database

```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

- Instale as dependências

```bash
yarn
```

- Crie as tabelas no banco de dados postgres

```bash
yarn typeorm migration:run
```

- Para subir servidor de desenvolvimento

```bash
yarn dev
```

- Com o servidor rodando, acesse [docs](http://localhost:3333/api-docs) para ter informações das rotas.
