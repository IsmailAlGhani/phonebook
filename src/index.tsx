import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client/react";
import { offsetLimitPagination } from "@apollo/client/utilities";

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          contact: offsetLimitPagination(),
        },
      },
    },
  }),
  uri: "https://wpe-hiring.tokopedia.net/graphql",
});

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
