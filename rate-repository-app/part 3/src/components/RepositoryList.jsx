import React from 'react';
import { useState } from 'react';
import useRepositories from '../hooks/useRepositories';


import RepositoryListContainer from "./RepositoryListContainer";

const getRepositoryOptions = (sortType, searchKeyword) => {
  switch (sortType) {
    case 'most-recent':
      return {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC',
        searchKeyword
      };
    case 'highest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
        searchKeyword
      };
    case 'lowest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
        searchKeyword
      };
    default:
      return {searchKeyword};
  }
};

const RepositoryList = () => {
  const [sortType, setSortType] = useState('most-recent');
  const [searchKeyword, setSearchKeyword] = useState('');
  const options = {first:5, ...getRepositoryOptions(sortType, searchKeyword)};
  const { repositories, fetchMore  } = useRepositories(options);
  const onEndReached = () => {
      fetchMore();
    };
  return <RepositoryListContainer repositories={repositories} sortType={sortType} setSortType={setSortType} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} onEndReached={onEndReached}/>;
};


export default RepositoryList;