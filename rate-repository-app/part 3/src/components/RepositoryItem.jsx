import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

import StatisticsContainer from './StatisticsContainer';
import InfoContainer from './InfoContainer';
import * as Linking from 'expo-linking';

import { TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  txtBtn: {
    backgroundColor: '#0366d6',
    padding: 14,
    color: 'white',
    textAlign: 'center',
    margin: 1,
    borderRadius: 10,
    fontWeight: 'bold',
  },
    txtBtn: {
        backgroundColor: '#0366d6',
        padding: 14,
        color: 'white',
        textAlign: 'center',
        margin: 1,
        borderRadius: 10,
        fontWeight: 'bold',
      }
});

const kFormat = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};


const RepositoryItem = ({ item, link }) => {
    const openConnection = () => {
    Linking.openURL(item.url);
  };
  return (
    <View>
      <InfoContainer item={item} />
      <StatisticsContainer
        stargazersCount={kFormat(item.stargazersCount)}
        forksCount={kFormat(item.forksCount)}
        reviewCount={kFormat(item.reviewCount)}
        ratingAverage={item.ratingAverage}  />

          {link && <TouchableWithoutFeedback testID='gitbutton' onPress={openConnection}>
                           <View>
                             <Text style={styles.txtBtn}>Open In github</Text>
                           </View>
                         </TouchableWithoutFeedback>}
    </View>

  );
};

export default RepositoryItem;