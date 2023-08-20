import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/react-hooks";

import Text from "../components/Text";

import { GET_REPOSITORIES } from "../graphql/queries";


const useRepositories = ({ orderBy, orderDirection }) => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      variables: { orderBy, orderDirection },
      onCompleted: (data) => {
        setRepositories(data.repositories);
      },
  });

  return { repositories, loading, error  };
};






export default useRepositories;