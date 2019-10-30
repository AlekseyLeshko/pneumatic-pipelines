module.exports = {
  collectCoverage: true,
  coverageReporters: ['html', 'text'],
  testRegex: '/__tests__/.*\\.unit.test\\.js$',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
}
