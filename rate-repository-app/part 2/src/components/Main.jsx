import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

import theme from '../theme';
import Text from './Text';
import AppBar from './AppBar'

import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn'

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
    <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn/>} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </View>

     </>
   );
};

export default Main;