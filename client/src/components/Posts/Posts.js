import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
}

export default Posts;
