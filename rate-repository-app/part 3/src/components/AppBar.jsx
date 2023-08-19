import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab'
import theme from '../theme'



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,

  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
    <AppBarTab text1={"Repositories"} text2={"Sign In"} text3={"Sign Out"} text4={"Create Review"} text5={"Sign Up"} />
    </View>
  );
};

export default AppBar