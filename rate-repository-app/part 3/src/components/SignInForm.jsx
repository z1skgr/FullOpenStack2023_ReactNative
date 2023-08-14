import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  txtBtn: {
    backgroundColor: '#0366d6',
    padding: 14,
    color: 'white',
    textAlign: 'center',
    margin: 1,
    borderRadius: 10,
    fontWeight: 'bold',
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={{ backgroundColor: 'white', padding:20 }}>
      <FormikTextInput testID='fUsername' name='username' placeholder=' Username' />
      <FormikTextInput testID='fPassword' name='password' placeholder=' Password' secureTextEntry/>
      <TouchableWithoutFeedback testID='fSubmit' onPress={onSubmit}>
        <View>
          <Text style={styles.txtBtn}>Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignInForm;