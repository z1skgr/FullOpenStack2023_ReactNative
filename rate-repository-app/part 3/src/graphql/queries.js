import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query repositories {
    repositories {
      edges {
        node {
          createdAt
          description
          forksCount
          fullName
          id
          language
          name
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;


export const GET_USER = gql`
  query {
    me {
      id
      username
    }
  }
`;



export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      createdAt
      description
      forksCount
      fullName
      id
      language
      name
      ownerAvatarUrl
      ownerName
      ratingAverage
      reviewCount
      stargazersCount
      url
    }
  }
`;