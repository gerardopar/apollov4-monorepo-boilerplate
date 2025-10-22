import { gql } from "@apollo/client";

export const HELLO_QUERY = gql`
  query Hello($name: String) {
    hello(name: $name)
  }
`;
