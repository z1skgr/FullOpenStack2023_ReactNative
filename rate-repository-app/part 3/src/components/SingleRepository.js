import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();

  const { repository } = useRepository(id);
  console.log(repository)
  console.log(id)
  return (
    <View style={{ backgroundColor: 'white', padding:20 }}>
      {repository  && <RepositoryItem item={repository} link />}
    </View>
  );
};

export default SingleRepository;