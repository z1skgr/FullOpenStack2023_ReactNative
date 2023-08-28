import React from "react";
import { format } from "date-fns";
import { View, StyleSheet  } from "react-native";
import Text from "./Text";
import theme from '../theme';


import useDeleteReview from "../hooks/useDeleteReview";
import { useNavigate } from "react-router-native";
import { Button } from 'react-native';
import { Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
    borderTopWidth: 10,
    borderTopColor: "#e1e4e8",
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  ratingContainer: {
    alignItems: 'center',
    marginRight: 16,
    width:40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'flex-start',

  },
    deleteButton: {

      paddingHorizontal: 15,
      color: 'white',
      textAlign: 'center',
      borderRadius: 10,
      fontWeight: 'bold',
    },
    viewButton: {

      paddingHorizontal: 15,
      marginRight: 15,
      color: 'white',
      textAlign: 'center',
      borderRadius: 10,
      fontWeight: 'bold',

    },
});

 const parseDate = (dateString) => {
  const dateObject = new Date(dateString);
  const formattedDate = format(dateObject, 'MMMM dd, yyyy');
  return formattedDate
};

const MyReviewItem = ({ review, refetch }) => {

    const navigate = useNavigate();
    const [deleteReview] = useDeleteReview();

    const viewPress = () => {
        navigate(`/repository/${review.node.repository.id}`);
      };

      const deleteAction = () => {
        console.log(review.node.id)
        deleteReview(review.node.id);
        refetch();
      };

      const onPress = () => {
        Alert.alert(
              "Delete review",
              "Are you sure you want to delete this review?",
              [
                {
                  text: "CANCEL",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "DELETE", onPress: () => deleteAction() },
              ],
              { cancelable: false }
            );
      }


  return (
    <View key={review.node.id} style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.ratingContainer}>
          <Text fontWeight='bold' style={{ marginTop: 8, color: "blue" }}>
            {review.node.rating}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{marginBottom: 2}} fontWeight='bold'>
            {review.node.repository.name}/{review.node.repository.ownerName}
          </Text>
          <Text style={{paddingBottom:1}} testID='repositoryDescription' color='textSecondary'>
            {parseDate(review.node.createdAt)}
          </Text>
          <Text style={{paddingTop:5}}>{review.node.text}</Text>
        </View>
      </View>
<View style={{flexDirection: 'row'}}>
    <View style={styles.viewButton}>
    <Button color="#841584" title="View repository" onPress={viewPress} />
    </View>
        <View style={styles.deleteButton}>
        <Button color="#d73a4a" title="Delete review" onPress={onPress} />
        </View>

      </View>
    </View>
  );
};

export default MyReviewItem;