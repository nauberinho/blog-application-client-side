import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

interface CustomAttributes {
  isActive: boolean;
}

const Container = styled.div`
  display: flex;
  padding: 2rem 1rem 0 1rem;
`;

const Logo = styled.div`
  padding: 1rem 3rem 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  flex: 1;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex: 1;
  float: right;
  justify-content: flex-end;
`;

const NavButton = styled(Link)`
  padding: 1rem 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  color: black;
  transition: 0.2s ease;
  ${(p: CustomAttributes) => p.isActive && "color: green;"}
`;

const Menu: React.FC = () => {
  const { pathname } = window.location;
  const [usersPath, postsPath, createUserPath, createPostPath] = [
    "/users",
    "/posts",
    "/users/create",
    "/posts/create"
  ];
  return (
    <Container>
      <Logo>Blogify</Logo>
      <LinkWrapper>
        <NavButton isActive={pathname === usersPath} to={usersPath}>
          Users
        </NavButton>
        <NavButton isActive={pathname === postsPath} to={postsPath}>
          Posts
        </NavButton>
        <NavButton isActive={pathname === createUserPath} to={createUserPath}>
          Create user
        </NavButton>
        <NavButton isActive={pathname === createPostPath} to={createPostPath}>
          Create post
        </NavButton>
      </LinkWrapper>
    </Container>
  );
};

export default withRouter(Menu);
