import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";

import UserList from "./components/UserList";
import PostList from "./components/PostList";
import User from "./components/User";
import Post from "./components/Post";

const App = () => {
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");

  return (
    <>
      <Router>
        <Route path="/users" component={UserList} />
        <Route path="/posts" component={PostList} />
        <Route path="/users/:id" component={User} />
        <Route path="/posts/:id" component={Post} />
      </Router>
    </>
  );
};

export default App;
