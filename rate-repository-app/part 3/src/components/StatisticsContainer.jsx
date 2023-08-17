import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    paddingBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  Stats: {
    paddingLeft: 25,
    width: '25%',
    justifyContent: 'center',
  },

});

const StatisticsContainer = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  return (
    <View style={styles.flexContainer}>
        <View  style={styles.Stats}>
          <Text testID="repositoryCounts" fontWeight='bold'>{stargazersCount}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View  style={styles.Stats}>
          <Text testID="repositoryCounts" fontWeight='bold'>{forksCount}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View  style={styles.Stats}>
          <Text testID="repositoryCounts" fontWeight='bold'>{reviewCount}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View  style={styles.Stats}>
          <Text testID="repositoryCounts" fontWeight='bold'>{ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
    </View>
  );
};

export default StatisticsContainer;