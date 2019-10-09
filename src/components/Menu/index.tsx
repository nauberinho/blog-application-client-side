import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding-top: 2rem;
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
  border: 2px solid black;
  float: right;
  justify-content: flex-end;
`;

const NavButton = styled(Link)`
  padding: 1rem 3rem;
  font-weight: 500;
  font-size: 1.25rem;
  text-decoration: none;
  color: black;
`;

const Menu: React.FC = () => {
  return (
    <Container>
      <Logo>Blogify</Logo>
      <LinkWrapper>
        <NavButton to="/users">Users</NavButton>
        <NavButton to="/posts">Posts</NavButton>
        <NavButton to="/users">Users</NavButton>
      </LinkWrapper>
    </Container>
  );
};

export default Menu;
