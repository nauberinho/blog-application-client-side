import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { selectLastViewed } from "../../selectors";

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
  color: gray;
`;

const GreenSpan = styled.span`
  color: #37c870;
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
  ${(p: CustomAttributes) => p.isActive && "color:  #37C870 ;"}
`;

const Menu: React.FC = () => {
  const { lastViewed } = useSelector(selectLastViewed);
  console.log(lastViewed);
  return (
    <Container>
      <Logo>
        <GreenSpan>B</GreenSpan>logify<GreenSpan>.</GreenSpan>
      </Logo>
      <LinkWrapper>
        <NavButton
          isActive={window.location.href.includes("users")}
          to={"/users"}
        >
          Users
        </NavButton>
        <NavButton
          isActive={window.location.href.includes("posts")}
          to={"/posts"}
        >
          Posts
        </NavButton>
      </LinkWrapper>
    </Container>
  );
};

export default withRouter(Menu);
