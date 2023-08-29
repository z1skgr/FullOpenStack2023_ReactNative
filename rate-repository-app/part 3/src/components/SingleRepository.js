import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router-native';

import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import SingleRepositoryContainer from './SingleRepositoryContainer';
const SingleRepository = () => {
  const { id } = useParams();

  const { repository  } = useRepository(id);
  const { reviews, fetchMore  } = useReviews(id);

  const onEndReached = () => {
      fetchMore();
    };

  return (
    <View>
     <SingleRepositoryContainer repository={repository} reviews={reviews} onEndReached={onEndReached}/>
    </View>
  );
};

export default SingleRepository;