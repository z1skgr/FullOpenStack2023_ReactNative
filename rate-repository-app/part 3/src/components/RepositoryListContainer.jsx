import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import RepositoryItem  from './RepositoryItem';
import { FlatList, Pressable } from 'react-native';
import { Link } from 'react-router-native';
import SortPicker from './SortPicker';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, sortType, setSortType }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Link to={`/repository/${item.id}`} component={Pressable}>
          <RepositoryItem item={item} />
        </Link>
      )}
      ListHeaderComponent={() => <SortPicker sortType={sortType} setSortType={setSortType} />}
    />
  );
};

export default RepositoryListContainer;