import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserListQuery, PostObject, Maybe } from "../../../generated/graphql";
import _ from "lodash";

interface User {
  node: {
    uuid: string;
    username: string;
    posts: { edges: { length: Number } };
  };
}

interface Props {
  data: UserListQuery;
}

const UserItem = styled(Link)`
  padding: 2rem 5rem 2rem 0rem;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  display: block;
  text-decoration: none;
`;

const Username = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: black;
`;

const NumberOfPosts = styled.div`
  color: black;
  font-size: 0.8rem;
  padding-top: 0.5rem;
`;

export const UserList: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <>
      {!!_.get(data, "allUsers.edges", false) &&
        _.get(data, "allUsers.edges", []).map((user: User) => (
          <UserItem to={`/users/user/${user.node.uuid}`} key={user.node.uuid}>
            <Username>{user.node.username!}</Username>
            <NumberOfPosts>
              Posts: {user!.node!.posts!.edges!.length}
            </NumberOfPosts>
          </UserItem>
        ))}
    </>
  );
};
