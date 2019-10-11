import React from "react";
import { Link } from "react-router-dom";
import { UserProfileQuery } from "../../../generated/graphql";
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
`;

const UserInfoTitle = styled.div`
  font-weight: 600;
  color: gray;
`;

const PostTitle = styled(Link)`
  padding-top: 1rem;
  cursor: pointer;
  display: block;
  color: black;
  text-decoration: none;
`;

interface Props {
  data: UserProfileQuery;
}

export const User: React.FC<Props> = ({ data }) => {
  const { user } = data;
  if (!user) {
    return <div>No User is available</div>;
  }

  return (
    <UserContainer>
      <Username>{user.username}</Username>

      <UserInfo>
        <UserInfoTitle>Posts</UserInfoTitle>
        {user.posts!.edges.map((post: any) => (
          <PostTitle to={`/posts/post/${post.node.uuid}`}>
            {post.node.title}
          </PostTitle>
        ))}
      </UserInfo>
    </UserContainer>
  );
};
