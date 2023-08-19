import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

import theme from '../theme';
import Text from './Text';
import AppBar from './AppBar'

import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn'

import SingleRepository from './SingleRepository'
import CreateReview from './CreateReview'
import SignUp from './SignUp'

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
        <Route path="/" element={<RepositoryList />} exact/>
        <Route path="/signin" element={<SignIn/>} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/repository/:id" element={<SingleRepository />} />
        <Route path="/add-review" element={<CreateReview />} exact />
        <Route path="/signup" element={<SignUp />} exact />
    </Routes>
    </View>

     </>
   );
};

export default Main;