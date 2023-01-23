const nextJest = require('next/jest')
const { ModuleResolutionKind } = require('typescript')
const createJestConfig = nextJest({dir:'./'})
const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
}

module.exports = createJestConfig(customJestConfig)