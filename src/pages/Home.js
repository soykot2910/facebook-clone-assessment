import React from "react";
import NewsFeed from "../components/NewsFeed";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <section className="homepage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="left-section">
              <SideBar />
            </div>
          </div>
          <div className="col-md-6">
            <div className="middle-section">
              <NewsFeed />
            </div>
          </div>
          <div className="col-md-3">
            <div className="right-section">
              <RightBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
