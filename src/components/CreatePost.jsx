import React, { useContext } from "react";
import UserContext from "../UserContext";
import { ActivityIcon, LiveVideoIcon, PhotoUploadIcon } from "./common/Icons";

const CreatePost = () => {
  const { userDetails } = useContext(UserContext);

  return (
    <div className="create-box post-box">
      <div className="top">
        <img src={userDetails.profile_pic} alt="" />
        <form style={{ width: "100%" }}>
          <input type="text" placeholder="What's on your mind, Soykot?" />
        </form>
      </div>
      <div className="line-brk"></div>
      <div className="l-p-f">
        <div className="live">
          <LiveVideoIcon />
          <span className="live-text">Live video</span>
        </div>
        <div className="photo">
          <PhotoUploadIcon />
          <span className="photo-text">Photo/video</span>
        </div>
        <div className="feeling">
          <ActivityIcon />
          <span className="feeling-text">Felling/activity</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
