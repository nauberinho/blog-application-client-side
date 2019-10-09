import gql from "graphql-tag";

export const QUERY_POST = gql`
  query Post($uuid: String!) {
    post(uuid: $uuid) {
      body
      id
      title
      author {
        username
        id
      }
    }
  }
`;
