import gql from "graphql-tag";

export const QUERY_USER_LIST = gql`
  query UserList {
    allUsers {
      edges {
        node {
          username
          uuid
          posts {
            edges {
              node {
                uuid
                body
                title
                author {
                  uuid
                  username
                }
              }
            }
          }
        }
      }
    }
  }
`;
