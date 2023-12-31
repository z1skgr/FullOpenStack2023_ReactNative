import React from 'react';
import { FlatList } from 'react-native';
import { View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

import ReviewItem from './ReviewItem';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});
const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryContainer = ({ repository, reviews, onEndReached }) => {

  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => repository ? <RepositoryItem  item={repository} link /> : null}
      ListHeaderComponentStyle={{marginBottom: 4, paddingBottom: 25}}
    />
  );
};

export default SingleRepositoryContainer;