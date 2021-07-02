# globalorg-api-backend

#crie um banco de dados em um container docker caso não tenho instalado na sua maquina:
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres


#Para iniciar o projeto uso os seguintes comandos:
yarn install

*para  criar a tabela no banco de dados postgres:
yarn typeorm migration:run

*para subir o servidor de desenvolvimento:
yarn dev
