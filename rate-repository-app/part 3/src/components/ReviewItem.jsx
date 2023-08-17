import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { addYears, formatWithOptions } from 'date-fns/fp'
import { eo } from 'date-fns/locale'

const styles = StyleSheet.create({
  reviewContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 16,
  },
  rate: {
    color: theme.colors.primary,
  },
  ratingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        width:40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: theme.colors.primary,
   },
   reviewTxt: {
      flex: 1,
   },

});

const parseDate = (dateString) => {
  const dateObject = new Date(dateString);
  const formattedDate = format(dateObject, 'MMMM dd, yyyy');
  return formattedDate
};

const ReviewItem = ({ review }) => {
  console.log(review)
  return (
    <View style={styles.reviewContainer}>
    <View  style={styles.ratingContainer}><Text style={styles.rate}>{review.rating}</Text></View>
    <View style={styles.reviewTxt}><Text style={{fontWeight: "bold"}}>{review.user.username}</Text>
          <Text color="textSecondary">{parseDate(review.createdAt)}</Text>
          <Text style={{marginTop: 16}}>{review.text}</Text></View>
    </View>
  );
};

export default ReviewItem;