import React, { useContext } from "react";
import StoryOne from "../assets/img/home/story1.webp";
import StoryTwo from "../assets/img/home/story2.webp";
import StoryThree from "../assets/img/home/story3.webp";
import UserContext from "../UserContext";
import { PlusIcon } from "./common/Icons";

const Story = () => {
  const { userDetails } = useContext(UserContext);

  return (
    <>
      <div className="stories">
        <div className="single">
          <img src={userDetails.profile_pic} alt="" className="s-img" />
          <div className="user_pic"></div>
          <div className="svg-section">
            <PlusIcon />
          </div>
          <p className="user_name first">Create Story</p>
        </div>
        <SingleStory i_id={StoryOne} name="Md Raisul" />
        <SingleStory i_id={StoryTwo} name="Hasan Khalifa" />
        <SingleStory i_id={StoryThree} name="Jack Daniel" />
      </div>
    </>
  );
};

export default Story;

const SingleStory = ({ i_id, name }) => (
  <div className="single">
    <img src={`${i_id}`} alt="" className="s-img" />
    <div className="user_pic">
      {/* <img src='./img/user/n0tificati0n-img-9.png' alt='' className='' /> */}
    </div>
    <p className="user_name">{name}</p>
  </div>
);
