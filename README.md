<h1 align="center"> Back-end API GlobalOrg </h1>

<div align="center">
  <a href="https://sites.google.com/grupocpb.org/sitedosvoluntarios/quem-somos" target="_blank">
  About us
  </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://t.me/VoluntariadoGrupoCPB" target="_blank">
  Telegram
  </a>
</div>

<br>

## Requirements

- [Node](https://nodejs.org/)
- API Client [e.g. [Postman](https://postman.com), [Insomnia](https://insomnia.rest/)]
- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/)

---

## Contributing

This repository is currently under development. If you want to contribute please fork the repository and get your hands dirty, and make the changes as you'd like and submit the Pull request.

---

## Follow steps

- With docker running use the following command

```bash
docker-compose up -d
```

- Installing dependencies

```bash
yarn[npm install]
```

- Run migrations to create database

```bash
yarn[npm run] typeorm migration:run
```

- Run the development server with the following command

```bash
yarn[npm run] dev
```

- Run tests with the following command

```bash
yarn[npm run] test
```

---

## Documentation

With server development running, access `https://localhost:{PORT}/api/api-docs/`
