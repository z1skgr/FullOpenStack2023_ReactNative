import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

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



const InfoContainer = ({ item }) => {
  return (
         <View style={styles.flexContainer}>
           <View style={styles.smallImage}>
             <Image style={styles.tinyLogo} source={{uri: item.ownerAvatarUrl}} />
           </View>
           <View style={styles.flexItem}>
             <Text testID="repositoryfullName" fontWeight='bold'>{item.fullName}</Text>
             <Text testID="repositoryDescription" color='textSecondary'>{item.description}</Text>
             <Text testID="repositoryLanguage" fontWeight='bold' style={styles.Language}> {item.language} </Text>
           </View>
         </View>
  );
};

export default InfoContainer;