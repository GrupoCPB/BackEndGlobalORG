const test = process.env.NODE_ENV === 'test' ? 'test' : '';

const isTest = () => {
  if (test === 'test') {
    return {
      dropSchema: true,
      logging: false,
      // synchronize: true,
      migrationsRun: true,
    };
  }
  return;
};

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: test || process.env.DB_USERNAME,
  password: test || process.env.DB_PASSWORD,
  database: test || process.env.DB_DATABASE,
  ...isTest(),
  entities: ['./src/models/*.{ts,js}'],
  migrations: ['./src/database/migrations/*.{ts,js}'],
  cli: {
    migrationsDir: './src/database/migrations',
    entitiesDir: 'src/models',
  },
};
