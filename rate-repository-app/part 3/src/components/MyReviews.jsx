import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CURRENT_USER } from "../graphql/queries";
import { FlatList } from "react-native";
import MyReviewItem from "./MyReviewItem";


const MyReviews = () => {
  const { data, refetch  } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: "cache-and-network",
  });

  const myReviewsData = data ? data.me.reviews.edges : [];

  return (
    <FlatList
      data={myReviewsData}
      renderItem={({ item }) => <MyReviewItem review={item} refetch={refetch} />}
      keyExtractor={(item) => item.node.id}
    />
  );
};

export default MyReviews;