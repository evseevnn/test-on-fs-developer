import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  bail: 1,
  preset: "ts-jest",
  collectCoverage: true,
  clearMocks: true,
  roots: ["./src"],
  testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  testTimeout: 60000,
};

export default config;
