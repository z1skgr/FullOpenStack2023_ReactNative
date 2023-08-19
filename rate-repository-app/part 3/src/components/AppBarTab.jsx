import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';

import SignIn from './SignIn'
import { Link } from 'react-router-native';

import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import { useApolloClient } from "@apollo/client";
import { useAuthStorage } from "../hooks/useAuthStorage";

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
  const { data } = useQuery(GET_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const user = data ? data.me : null;
  console.log(user)

  const SignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.flexContainer}>
        <ScrollView horizontal>
          <Link to='/'>
            <Text style={styles.bar_text} >
              {props.text1}
            </Text>
          </Link>

        {user &&
                      <Link to='/add-review'>
                                  <Text style={styles.bar_text} >
                                   {props.text4}
                                  </Text>
                                  </Link> }
        {user ?     (<Link to='/signout' onPress={() => SignOut()}>
                            <Text style={styles.bar_text} >
                             {props.text3}
                            </Text>
                          </Link>) :
       <>   (<Link to='/signin'>
            <Text style={styles.bar_text} >
             {props.text2}
            </Text>
          </Link>)
           (<Link to='/signup'>
                       <Text style={styles.bar_text} >
                        {props.text5}
                       </Text>
                     </Link>)
           </>}
       </ScrollView>
    </View>
  );
};

export default AppBarTab