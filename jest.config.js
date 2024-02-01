module.exports = {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testRunner: 'jest-circus/runner',
    testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)', 
    ],
    setupFiles: ['<rootDir>/setupTests.js'], 
  };
  