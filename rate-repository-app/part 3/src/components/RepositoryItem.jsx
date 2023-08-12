import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

import StatisticsContainer from './StatisticsContainer';
import InfoContainer from './InfoContainer';

const kFormat = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};


const RepositoryItem = ({ item }) => {
  return (
    <View>
      <InfoContainer item={item} />
      <StatisticsContainer
        stargazersCount={kFormat(item.stargazersCount)}
        forksCount={kFormat(item.forksCount)}
        reviewCount={kFormat(item.reviewCount)}
        ratingAverage={item.ratingAverage}  />
    </View>
  );
};

export default RepositoryItem;