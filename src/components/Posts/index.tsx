import * as React from "react";
import PostList from "./PostList";
import Post from "./Post";
import CreatePost from "./CreatePost";
import { Route } from "react-router-dom";

const Posts: React.FC = () => {
  return (
    <>
      <Route exact path="/posts" component={PostList} />
      <Route exact path="/posts/post/:id" component={Post} />
      <Route exact path="/posts/create" component={CreatePost} />
    </>
  );
};

export default Posts;
