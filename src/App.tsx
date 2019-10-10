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
`;

const Content = styled.div`
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(30%, rgba(255, 255, 255, 1)),
    color-stop(47%, rgba(246, 246, 246, 1)),
    color-stop(72%, rgba(237, 237, 237, 1)),
    color-stop(100%, rgba(237, 237, 237, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  padding: 2rem 1rem 0 1rem;
  height: auto;
  min-height: 80vh;
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
