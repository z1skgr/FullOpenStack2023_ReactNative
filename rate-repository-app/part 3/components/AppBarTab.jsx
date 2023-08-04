import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';

import SignIn from './SignIn'
import { Link } from 'react-router-native';

import {
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  flexContainer: {
      display: 'flex',
      paddingBottom: 10,
      flexDirection: 'row',
  },
  flexItemA: {
    flex: 2,
    backgroundColor: 'black',
  },
  text: {
      color: 'white',
      fontSize: 24,
      fontWeight: '700',
  },
  bar_text: {
    paddingLeft: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  }

});


const AppBarTab = (props) => {
  return (
    <View style={styles.flexContainer}>
        <ScrollView horizontal>
          <Link to='/'>
            <Text style={styles.bar_text} >
              {props.text1}
            </Text>
          </Link>
          <Link to='/signin' >
            <Text style={styles.bar_text} >
              {props.text2}
            </Text>
          </Link>

       </ScrollView>
    </View>
  );
};

export default AppBarTab