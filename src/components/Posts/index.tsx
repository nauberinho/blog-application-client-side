import * as React from "react";
import PostList from "./PostList";
import Post from "./Post";
import { Route } from "react-router-dom";

const Posts: React.FC = () => {
  return (
    <>
      <Route exact path="/posts" component={PostList} />
      <Route exact path="/posts/:id" component={Post} />
    </>
  );
};

export default Posts;
