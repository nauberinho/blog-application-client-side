import React from "react";
import { UserProfileQuery } from "../../generated/graphql";
import styled from "styled-components";

const Username = styled.div`
  padding: 1rem 0 0 0;
  border-radius: 5px;
  font-weight: 700;
`;

const UserContainer = styled.div`
  padding: 2rem;
`;

const UserInfo = styled.div`
  padding-top: 2rem;
  border: 1px solid lightgray;
`;

const UserInfoTitle = styled.div`
  font-weight: 600;
  color: gray;
`;

const PostTitle = styled.div`
  padding-top: 1rem;
`;

interface Props {
  data: UserProfileQuery;
}

const User: React.FC<Props> = ({ data }) => {
  const { user } = data;
  console.log(user);
  if (!user) {
    return <div>No User is available</div>;
  }

  return (
    <UserContainer>
      <Username>{user.username}</Username>

      <UserInfo>
        <UserInfoTitle>Posts</UserInfoTitle>
        {user.posts!.edges.map((post: any) => (
          <PostTitle>{post.node.title}</PostTitle>
        ))}
      </UserInfo>
    </UserContainer>
  );
};

export default User;
