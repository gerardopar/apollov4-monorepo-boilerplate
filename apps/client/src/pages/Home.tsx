import React from "react";

import { useQuery } from "@apollo/client/react";
import { HELLO_QUERY } from "../graphql/queries/hello";

export const Home: React.FC = () => {
  const { data } = useQuery(HELLO_QUERY, {
    variables: { name: "World" },
  });

  console.log(data);

  return <div></div>;
};

export default Home;
