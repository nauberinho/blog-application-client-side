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
  padding: 2rem 0;
`;

const UserInfo = styled.div``;

const BodyLine = styled.div`
  postion: absolute;
  top: 0;
  left: 0;
  border: 1.5px solid #37c870;
  width: 30%;
  margin: 1rem 0;
  border-radius: 5px;
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
        <BodyLine></BodyLine>
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
