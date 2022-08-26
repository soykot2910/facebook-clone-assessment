import React, { useContext } from "react";
import FindFrnd from "../assets/img/home/find-icon.png";
import WatchIcon from "../assets/img/home/watch.png";
import GroupIcon from "../assets/img/home/groups-icon.png";
import PageIcon from "../assets/img/home/page-icon.png";
import GameIcon from "../assets/img/home/game.png";
import UserContext from "../UserContext";
import { HomeIcon, MenuIcon } from "./common/Icons";
const SideBar = () => {
  const { userDetails } = useContext(UserContext);

  return (
    <>
      <div className="top">
        <ul>
          <li className="">
            <HomeIcon />
            <span style={{ marginLeft: "20px" }}>Home</span>
          </li>
          <li className="profile">
            <img src={userDetails.profile_pic} alt="" />
            <span>{userDetails.name}</span>
          </li>
          <li className="">
            <div className="menu-icon">
              <MenuIcon />
            </div>
            <span style={{ marginLeft: "20px" }}>Menu</span>
          </li>
          <li className="">
            <img src={FindFrnd} alt="" />
            <span>Friends</span>
          </li>
          <li className="">
            <img src={WatchIcon} alt="" />
            <span>Watch</span>
          </li>
          <li className="">
            <img src={GroupIcon} alt="" />
            <span>Groups</span>
          </li>
          <li className="">
            <img src={PageIcon} alt="" />
            <span>Pages</span>
          </li>
          <li className="">
            <img src={GameIcon} alt="" />
            <span>Play Games</span>
          </li>
          <li className="see-more">
            <div className="rounde">
              <svg
                viewBox="0 0 16 16"
                width="2.0rem"
                height="2.0rem"
                className="sidebar-con--flex--box--img  small-arrrow"
                style={{ userSelect: "auto" }}
              >
                <g
                  fillRule="evenodd"
                  transform="translate(-448 -544)"
                  style={{ userSelect: "auto" }}
                >
                  <path
                    fillRule="nonzero"
                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                    style={{ userSelect: "auto" }}
                  />
                </g>
              </svg>
            </div>
            <span>See More</span>
          </li>
        </ul>
      </div>
      <div className="line-brk"></div>
      <div className="bottom">
        <p className="tit">Your Shortcuts</p>
        <ul>
          <li className="">
            <img src={"https://via.placeholder.com/600/92c952"} alt="" />
            <span>CSE/EEE JOBS in Bangladesh</span>
          </li>
          <li className="">
            <img src={"https://via.placeholder.com/600/771796"} alt="" />
            <span>GFX Mentor Community</span>
          </li>
          <li className="">
            <img src={"https://via.placeholder.com/600/24f355"} alt="" />
            <span>Gta Games</span>
          </li>
          <li className="">
            <img src={"https://via.placeholder.com/600/d32776"} alt="" />
            <span>NetfliX Offical</span>
          </li>
          <li className="">
            <img src={"https://via.placeholder.com/600/b0f7cc"} alt="" />
            <span>8 Ball Pool</span>
          </li>
          <li className="">
            <img src={"https://via.placeholder.com/600/810b14"} alt="" />
            <span>Play Games</span>
          </li>
          <li className="see-more">
            <div className="rounde">
              <svg
                viewBox="0 0 16 16"
                width="2.0rem"
                height="2.0rem"
                className="sidebar-con--flex--box--img  small-arrrow"
                style={{ userSelect: "auto" }}
              >
                <g
                  fillRule="evenodd"
                  transform="translate(-448 -544)"
                  style={{ userSelect: "auto" }}
                >
                  <path
                    fillRule="nonzero"
                    d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                    style={{ userSelect: "auto" }}
                  />
                </g>
              </svg>
            </div>
            <span>See More</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
