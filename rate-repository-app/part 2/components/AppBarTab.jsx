import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  flexItemA: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
  text: {
      color: 'white',
      fontSize: 24,
      fontWeight: '700',
  }
});


const AppBarTab = ({text}) => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Pressable onPress={null}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
      </View>


    </View>
  );
};

export default AppBarTab