import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

import StatisticsContainer from './StatisticsContainer';
import InfoContainer from './InfoContainer';
import * as Linking from 'expo-linking';

import { TouchableWithoutFeedback } from 'react-native';
import { kFormat } from '../utils/helpers'

const styles = StyleSheet.create({
  txtBtn: {
    backgroundColor: '#0366d6',
    padding: 15,

    color: 'white',
    textAlign: 'center',
    margin: 1,
    borderRadius: 10,
    fontWeight: 'bold',


  },
    flexContainer: {
        display: 'flex',
        padding:15,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

      },
});




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
        ratingAverage={item.ratingAverage}/>
      {link && <TouchableWithoutFeedback  testID='gitbutton' onPress={openConnection}>
                                     <View style={styles.flexContainer}>
                                       <Text style={styles.txtBtn}>Open In github</Text>
                                     </View>
                                   </TouchableWithoutFeedback>}


    </View>



  );
};

export default RepositoryItem;