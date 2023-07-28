
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const RepositoryItem = ({ item }) => {
  return (
  <View styles={styles.container}>

  <Text>FullName: {item.fullName}</Text>
  <Text>Description: {item.description}</Text>
  <Text>Language: {item.language}</Text>
  <Text>Forks: {item.forksCount}</Text>
  <Text>Start: {item.stargazersCount}</Text>
  <Text>Rating: {item.ratingAverage}</Text>
  <Text>Reviews: {item.reviewCount}</Text>
  <Text>Url: {item.ownerAvatarUrl}</Text>
  </View>

  );
};

export default RepositoryItem
