import React from "react";
import "./subscribe.css";

function Subscribe() {
  return (
    <div className="subes-component">
      <div className="subes-text">
        <h1>Subscribe</h1>
      </div>
      <div className="blue-div">
        <p className="blue-t">
          Semper lacus cursus porta, feugiat primis ultrice ligula risus auctor.
        </p>
      </div>
      <div className="r1">
        <input
          type="email"
          className="email-s"
          placeholder="Enter Your Email"
        ></input>
        <input type="submit" className="submit-s"></input>
      </div>
    </div>
  );
}

export default Subscribe;

{
  /* <div className="lll">
<input type="email" placeholder="Please Enter Your Email"></input>
<input type="submit">Signup</input>
</div> */
}
