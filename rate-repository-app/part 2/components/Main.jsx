import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

import theme from './theme';
import Text from './Text';
import AppBar from './AppBar'

const styles = StyleSheet.create({
  container: {

    marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.appBackGround,
  },
});

const Main = () => {
 return (
     <>
    <View style={styles.container}>
    <AppBar />
    <RepositoryList />
    </View>

     </>
   );
};

export default Main;