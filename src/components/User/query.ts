import gql from "graphql-tag";

export const QUERY_USER_PROFILE = gql`
  query UserProfile($uuid: String!) {
    user(uuid: $uuid) {
      username
      uuid
      posts {
        edges {
          node {
            id
            body
            title
            author {
              id
              username
            }
          }
        }
      }
    }
  }
`;
