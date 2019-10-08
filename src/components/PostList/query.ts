import gql from "graphql-tag";

export const QUERY_POST_LIST = gql`
  query PostList {
    allPosts {
      edges {
        node {
          body
          uuid
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
