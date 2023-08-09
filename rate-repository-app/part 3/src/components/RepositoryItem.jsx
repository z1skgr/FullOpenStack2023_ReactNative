import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const kFormat = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    paddingBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  smallImage: {
    flexGrow: 0,
    padding: 10,
  },
  flexItem: {
    paddingTop: 3,
    flexGrow: 0,
    borderColor: 'black',
    alignItems: 'flex-start',
    flexShrink: 1,
  },
  Stats: {
    paddingLeft: 25,
    width: '25%',
    justifyContent: 'center',
  },
  Language: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 2,
    borderRadius: 3,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <View style={styles.flexContainer}>
        <View style={styles.smallImage}>
          <Image style={styles.tinyLogo} source={{uri: item.ownerAvatarUrl}} />
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight='bold'>{item.fullName}</Text>
          <Text color='textSecondary'>{item.description}</Text>
          <Text fontWeight='bold' style={styles.Language}> {item.language} </Text>
        </View>
      </View>

      <View style={styles.flexContainer}>
        <View style={styles.Stats}>
          <Text fontWeight='bold'>{kFormat(item.stargazersCount)}</Text>
          <Text color='textSecondary'>Stars</Text>
        </View>
        <View style={styles.Stats}>
          <Text fontWeight='bold'>{kFormat(item.forksCount)}</Text>
          <Text color='textSecondary'>Forks</Text>
        </View>
        <View style={styles.Stats}>
          <Text fontWeight='bold'>{kFormat(item.reviewCount)}</Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>
        <View style={styles.Stats}>
          <Text fontWeight='bold'>{item.ratingAverage}</Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;