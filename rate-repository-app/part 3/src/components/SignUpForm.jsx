import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  fieldContainer: {
    marginBottom: 15,
  },
      txtBtn: {
        backgroundColor: '#0366d6',
        padding: 7,
        color: 'white',
        textAlign: 'center',
        margin: 1,
        borderRadius: 10,
        fontWeight: 'bold',
      }
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          testID='formikUsername'
          name='username'
          placeholder=' Username'
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name='password'
          placeholder=' Password'
          secureTextEntry
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name='confirmPassword'
          placeholder=' Confirm password'
          secureTextEntry
        />
      </View>
      <TouchableWithoutFeedback testID='fSignUp' onPress={onSubmit}>
                    <View>
                      <Text style={styles.txtBtn}>Sign Up</Text>
                    </View>
                  </TouchableWithoutFeedback>
    </View>
  );
};

export default SignUpForm;