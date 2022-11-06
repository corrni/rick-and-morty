import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

if (!process.env.GRAPHQL_ENDPOINT) {
  throw new Error(
    "Missing GraphQL endpoint configuration. Check your `.env.local` file."
  );
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.GRAPHQL_ENDPOINT, fetch }),
  cache: new InMemoryCache(),
});
