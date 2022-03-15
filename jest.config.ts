/* eslint-disable max-len */
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/api_docs/**/*',
    '!src/@types/**/*',
    '!src/config/**/*',
    '!src/database/**/*',
  ],

  coverageDirectory: '__tests__/coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    // "text",
    'lcov',
  ],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
