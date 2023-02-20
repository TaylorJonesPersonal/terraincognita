/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/__tests__/testSetup.ts'],
    testPathIgnorePatterns: [
        '<rootDir>/__tests__/mocks/fileMock.js',
        '<rootDir>/__tests__/testSetup.ts',
    ],
    moduleNameMapper: {
        '\\.(jpg|gif|css|png|svg)$': '<rootDir>/__tests__/mocks/fileMock.js',
    },
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
