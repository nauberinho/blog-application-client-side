import * as React from "react";
import styled from "styled-components";
import { UserListQuery } from "../../generated/graphql";
import _ from "lodash";

export interface OwnProps {
  handleIdChange: (newId: string) => void;
}

interface User {
  node: {
    uuid: string;
    username: string;
  };
}

interface Props extends OwnProps {
  data: UserListQuery;
}

const Container = styled.div`
  border: 1px solid green;
`;

const UserItem = styled.div`
  padding: 2rem 5rem 2rem 1rem;
  border-bottom: 2px solid lightgray;
  cursor: pointer;
`;

export const UserList: React.FC<Props> = ({ data, handleIdChange }) => {
  console.log(data.allUsers!.edges);
  return (
    <Container>
      {!!_.get(data, "allUsers.edges", false) &&
        _.get(data, "allUsers.edges", []).map((user: User) => {
          console.log(user);
          return (
            <UserItem
              key={user.node.uuid}
              onClick={() => handleIdChange(user.node.uuid!)}
            >
              {user.node.username!}
            </UserItem>
          );
        })}
    </Container>
  );
};
