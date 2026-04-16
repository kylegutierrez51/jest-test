
const config = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
  // transform: {
  // '^.+\\.ts$': 'ts-jest',
  // '^.+\\.jsx?$': 'babel-jest',
  // },
  // setupFilesAfterEnv: ['./jest.setup.js'],

  collectCoverage: true,
  coverageThreshold: {
    global: { lines: 80, functions: 80, branches: 80 }
  },

  moduleNameMapper: {
    '\\.(css|png)$': '<rootDir>/__mocks__/fileMock.js',
    '^@\/(.*)$': '<rootDir>/src/$1'
  },

  clearMocks: true,
  restoreMocks: true,
}

module.exports = config;


/*
testEnvironment:
 - sets the runtime environment. 
 - Use 'node' for backend/Express apps, 'jsdom' for anything that touches the DOM (React, browser APIs).
*/

// testMatch:
//  - glob patterns that tell Jest which files are tests. 
//  - Defaults to:  **/*.test.js and **/*.spec.js, which is usually fine.

/*
transform:
 - transpiles files before running. Required if you're using TypeScript, JSX, or ESM.

setupFilesAfterEnv:
 - specifies a list of modules that run some code to configure or set up the testing framework before each test file
 - runs a setup file after Jest loads.
 - Common Use Cases:
      1. Global Mocks/Polyfills: Setting up global mocks that require access to the test environment.
      2. Importing Libraries: Automatically importing libraries like jest-dom for every test file to enable matchers like .toBeInTheDocument().
      3. Global Setup Logic: Code that acts as a "global beforeAll" for every test file in your suite. 


collectCoverage + coverageThreshold:
 - enables coverage collection and enforces minimums. 
 - Your CI pipeline will fail if coverage drops below these numbers.

moduleNameMapper:
 - maps module paths to stubs. 
 - Path Aliasing: maps custom aliases to actual file paths so Jest can resolve them during test execution (@/components → src/components)
     - ex: "^@\/(.*)$": "<rootDir>/src/$1" -- Maps @/utils to [project-root]/src/utils.

 - Stubbing Assets: replaces files like .css, .scss, or .png with a mock object or a simple string to prevent syntax errors during text execution
     - ex: "\\.css$": "identity-obj-proxy" -- this mocks CSS class names as strings
     - ex: "\\.(jpg|png)$": "<rootDir>/__mocks__/fileMock.js" -- this redirects image imports to a single dummy file


clearMocks / restoreMocks:
 - when set to true, Jest automatically clears mock call history and restores spied-on originals between every test. 
 - Strongly recommended, prevents mock state from leaking across tests.
*/
