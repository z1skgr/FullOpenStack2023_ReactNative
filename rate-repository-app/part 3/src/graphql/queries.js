import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query repositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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
        cursor
      }
       pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
    }
  }
`;

export const GET_USER = gql`
query getUser{
  me {
    id
    username
    
  }
}
`;


export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false){
    me {
      id
      username
      reviews @include(if: $includeReviews) {
              edges {
                node {
                  id
                  text
                  rating
                  repository {
                    name
                    ownerName
                    id
                  }
                  createdAt
                  user {
                    id
                    username
                  }
                }
                cursor
              }
              pageInfo {
                endCursor
                startCursor
                hasPreviousPage
                hasNextPage
              }
            }
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

export const GET_REVIEWS = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;




