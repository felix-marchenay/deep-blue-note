module.exports = {
  testMatch: ["**/test/**/*.test.ts?(x)"],
  transform: {
    "\\.(ts)$": "ts-jest",
  },
  testEnvironment: "node",
};
