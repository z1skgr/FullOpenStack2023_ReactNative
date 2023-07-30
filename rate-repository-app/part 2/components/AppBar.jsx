import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab'
import theme from './theme'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingBottom: 15,
    // color: 'white',
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
    <AppBarTab text={"Repositories"} />
    </View>
  );
};

export default AppBar