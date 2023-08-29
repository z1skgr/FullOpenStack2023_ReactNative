import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/react-hooks";

import Text from "../components/Text";

import { GET_REPOSITORIES } from "../graphql/queries";


const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading, refetch, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      variables,
  });
    const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;


    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data?.repositories,
    error,
    loading,
    fetchMore: handleFetchMore,
    refetch,
    ...result,
  };



};

export default useRepositories;