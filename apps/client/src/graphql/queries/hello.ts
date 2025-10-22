import { type TypedDocumentNode } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
  type HelloQuery,
  type HelloQueryVariables,
} from "../__generated__/graphql";

import { gql } from "@apollo/client";

const HELLO_QUERY: TypedDocumentNode<HelloQuery, HelloQueryVariables> = gql`
  query Hello($name: String) {
    hello(name: $name)
  }
`;

export const useHelloQuery = (variables: HelloQueryVariables) => {
  return useQuery<HelloQuery, HelloQueryVariables>(HELLO_QUERY, {
    variables,
  });
};
