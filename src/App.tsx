import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { theme } from "react-elems";
import styled from "styled-components";

import "./App.css";

import Menu from "./components/Menu";

import Users from "./components/Users";
import Posts from "./components/Posts";

const Container = styled.div`
  @media ${theme.mediaQueries.mobileM("min")} {
    padding: 0rem 0rem;
  }
  @media ${theme.mediaQueries.tablet("min")} {
    padding: 1rem 10rem;
  }
  @media ${theme.mediaQueries.laptop("min")} {
    padding: 1rem 20rem;
  }
  @media ${theme.mediaQueries.laptopL("min")} {
    padding: 1rem 30rem;
  }
  @media ${theme.mediaQueries.desktopL("min")} {
    padding: 2rem 45rem;
  }
  border: 2px solid green;
  height: 100vh;
`;

const Content = styled.div`
  padding-top: 2rem;
  border: 3px solid blue;
  height: auto;
  background: ${"lightgray"};
`;

const App = () => {
  return (
    <Container>
      <Router>
        <Menu />
        <Content>
          <Route path="/users" component={Users} />
          <Route path="/posts" component={Posts} />
        </Content>
      </Router>
    </Container>
  );
};

export default App;
