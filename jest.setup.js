import "@testing-library/jest-dom/extend-expect";

import { apolloClient } from "./config";
import { server } from "./mocks/server";

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

beforeEach(() => {
  // Ensure Apollo cache is cleared between tests.
  // https://www.apollographql.com/docs/react/api/core/ApolloClient/#ApolloClient.clearStore
  return apolloClient.clearStore();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
