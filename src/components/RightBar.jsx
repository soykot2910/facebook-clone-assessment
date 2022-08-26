import React from "react";
import { MeatballsIcon, SearchIcon, VideoIcon } from "./common/Icons";

const RightBar = () => {
  return (
    <>
      <div className="header">
        <div className="left">Contacts</div>
        <div className="right">
          <VideoIcon />
          <SearchIcon />
          <MeatballsIcon />
        </div>
      </div>
      <div className="chat-lists">
        <SingleChat name="Liam Olivia" active={true} i_id="34t5435" />
        <SingleChat name="Ismail Sheikh" active={false} i_id="65h755" />
      </div>
    </>
  );
};

export default RightBar;

const SingleChat = ({ name, active, i_id }) => (
  <div className="single">
    <div className="img-section">
      <img
        src={`https://via.placeholder.com/600/771796`}
        alt=""
        className={active ? "active-img" : ""}
      />
      {active && <div className="active-icon"></div>}
    </div>
    <p className="name">{name}</p>
  </div>
);
