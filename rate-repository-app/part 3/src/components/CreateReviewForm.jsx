import React from "react";
import { View, StyleSheet } from "react-native";
import FormikTextInput from "./FormikTextInput";

import { Text, TouchableWithoutFeedback} from 'react-native';

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

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <FormikTextInput
          name='ownerName'
          placeholder=' Repository owner name'
        />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name='repositoryName' placeholder=' Repository name' />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput name='text' placeholder='Review' />
      </View>
            <TouchableWithoutFeedback testID='fReview' onPress={onSubmit}>
              <View>
                <Text style={styles.txtBtn}>Create a review</Text>
              </View>
            </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateReviewForm;