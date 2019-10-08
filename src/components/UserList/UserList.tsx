import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserListQuery } from "../../generated/graphql";
import _ from "lodash";

interface User {
  node: {
    uuid: string;
    username: string;
  };
}

interface Props {
  data: UserListQuery;
}

const Container = styled.div`
  border: 1px solid green;
`;

const UserItem = styled(Link)`
  padding: 2rem 5rem 2rem 1rem;
  border-bottom: 2px solid lightgray;
  cursor: pointer;
`;

export const UserList: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {!!_.get(data, "allUsers.edges", false) &&
        _.get(data, "allUsers.edges", []).map((user: User) => (
          <UserItem to={`${user.node.uuid}`} key={user.node.uuid}>
            {user.node.username!}
          </UserItem>
        ))}
    </Container>
  );
};
