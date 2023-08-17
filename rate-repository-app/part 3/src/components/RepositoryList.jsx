import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import React from 'react';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';

import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
};


export default RepositoryList;