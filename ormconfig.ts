/* eslint-disable consistent-return */
const isTestEnvironment = process.env.NODE_ENV === 'test' ? 'test' : '';

const isTest = () => {
  if (isTestEnvironment === 'test') {
    return {
      dropSchema: true,
      logging: false,
      migrationsRun: true,
    };
  }
};

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: isTestEnvironment || process.env.DB_USERNAME,
  password: isTestEnvironment || process.env.DB_PASSWORD,
  database: isTestEnvironment || process.env.DB_DATABASE,
  ...isTest(),
  entities: ['./src/models/*.{ts,js}'],
  migrations: ['./src/database/migrations/*.{ts,js}'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: 'src/models',
  },
};
