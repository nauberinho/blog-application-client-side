import gql from "graphql-tag";

export const QUERY_POST_LIST = gql`
  query PostList {
    allPosts {
      edges {
        node {
          body
          id
          title
          author {
            id
            username
          }
        }
      }
    }
  }
`;
