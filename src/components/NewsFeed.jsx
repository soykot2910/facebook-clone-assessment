import React from "react";
import CreatePost from "./CreatePost";
import CreateRoom from "./CreateRoom";
import Story from "./Story";

const NewsFeed = () => {
  return (
    <>
      <Story />
      <CreatePost/>
      <CreateRoom/>
    </>
  );
};

export default NewsFeed;
