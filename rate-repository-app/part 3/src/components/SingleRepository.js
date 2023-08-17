import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import RepositoryItem from './RepositoryItem';
import SingleRepositoryContainer from './SingleRepositoryContainer';
const SingleRepository = () => {
  const { id } = useParams();

  const { repository } = useRepository(id);
  const { reviews } = useReviews(id);

  return (
    <View>
     <SingleRepositoryContainer repository={repository} reviews={reviews}/>
    </View>
  );
};

export default SingleRepository;