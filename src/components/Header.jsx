import React, { useContext } from "react";
import { BellIcon, Logo, MessengerIcon } from "./common/Icons";
import SearchLogo from "../assets/img/nav/search.svg";
import UserContext from "../UserContext";

const Header = () => {
  const { userDetails } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <div>
          <a href="#?" className="navbar-brand smooth-scroll">
            <Logo />
          </a>
        </div>

        <div className="log-srch">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <img src={SearchLogo} alt="" />
            </span>
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>

        <ul className="navbar-nav ml-auto">
          <div className="rig">
            <div className="all">
              <MessengerIcon />
              <BellIcon />
              <img src={userDetails.profile_pic} alt='' className='pro-pic' />
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
