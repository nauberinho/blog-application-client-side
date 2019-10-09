import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($username: String!) {
    createUser(username: $username) {
      user {
        id
        username
        posts {
          edges {
            node {
              id
              author {
                username
                uuid
              }
              authorId
              body
              title
            }
          }
        }
      }
    }
  }
`;
