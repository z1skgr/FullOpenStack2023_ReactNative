import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import React from 'react';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';


import RepositoryListContainer from "./RepositoryListContainer";

const getRepositoryOptions = (sortType) => {
  switch (sortType) {
    case 'most-recent':
      return {
        orderBy: 'CREATED_AT',
        orderDirection: 'DESC',
      };
    case 'highest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'DESC',
      };
    case 'lowest-rated':
      return {
        orderBy: 'RATING_AVERAGE',
        orderDirection: 'ASC',
      };
    default:
      return {};
  }
};

const RepositoryList = () => {
  const [sortType, setSortType] = useState('most-recent');
  const options = getRepositoryOptions(sortType);
  const { repositories } = useRepositories(options);
  return <RepositoryListContainer repositories={repositories} sortType={sortType} setSortType={setSortType} />;
};


export default RepositoryList;