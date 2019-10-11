import gql from "graphql-tag";

export const CREATE_POST = gql`
  mutation createPost($body: String!, $title: String!, $username: String!) {
    createPost(username: $username, title: $title, body: $body) {
      post {
        title
        body
        author {
          username
          uuid
        }
      }
    }
  }
`;
