import React from "react";
import { ApolloProvider } from "@apollo/client/react";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import apolloClient from "./apollo/Apollo";

export const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
