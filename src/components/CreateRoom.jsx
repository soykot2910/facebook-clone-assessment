import React from "react";

const CreateRoom = () => {
  return (
    <div className="create-room post-box">
      <div className="room">
        <i
          data-visualcompletion="css-img"
          className="active-line--btn--icon"
          style={{
            backgroundImage:
              'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5zaboDASSye.png")',
            backgroundPosition: "0px -219px",
            backgroundSize: "auto",
            width: "24px",
            height: "24px",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            userSelect: "auto",
          }}
        />
        <p className="">Create Room</p>
      </div>
      <div className="images">
        <div className="single">
          {/* <img src={userDetails.profile_pic} alt="" /> */}
        </div>
        <div className="single">
          {/* <img src={userDetails.profile_pic} alt="" /> */}
          <div className="active-icon"></div>
        </div>
        <div className="single">
          {/* <img src={userDetails.profile_pic} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
