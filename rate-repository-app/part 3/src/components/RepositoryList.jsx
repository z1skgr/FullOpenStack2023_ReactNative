import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import React from 'react';
import { useState, useEffect } from 'react';
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
  const options = getRepositoryOptions(sortType, searchKeyword);
  const { repositories } = useRepositories(options);
  return <RepositoryListContainer repositories={repositories} sortType={sortType} setSortType={setSortType} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />;
};


export default RepositoryList;