import React from "react";
import "./teamMembers.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function teamMembers() {
  return (
    <div className="team-container" id="TeamMembers">
      <div className="team-header">
        <h1>Team Members</h1>
        <p>
          Sed fermentum, felis ut cursus varius, purus velit placerat tortor, at
          faucibus elit purus posuere velit. Integer sit amet felis ligula.
        </p>
      </div>
      <div className="team-cards">
        <div className="team-card">
          <img src="/images/team1.jpg" />
          <h3>Hans Desjarlais</h3>
          <small>FOUNDER & CEO</small>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            ligula eu justo convallis fringilla.
          </p>
          <div className="logos">
            <BsFacebook className="logo" />
            <AiOutlineTwitter className="logo" />
            <BsLinkedin className="logo" />
            <FaInstagram className="logo" />
          </div>
        </div>
        <div className="team-card">
          <img src="/images/team2.jpg" />
          <h3>Janelle Brandon</h3>
          <small>MARKETING DIRECTOR</small>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            ligula eu justo convallis fringilla.
          </p>
          <div className="logos">
            <BsFacebook className="logo" />
            <AiOutlineTwitter className="logo" />
            <BsLinkedin className="logo" />
            <FaInstagram className="logo" />
          </div>
        </div>
        <div className="team-card">
          <img src="/images/team3.jpg" />
          <h3>Eric Kelly</h3>
          <small>SENIOR PROGRAMMER</small>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
            ligula eu justo convallis fringilla.
          </p>
          <div className="logos">
            <BsFacebook className="logo" />
            <AiOutlineTwitter className="logo" />
            <BsLinkedin className="logo" />
            <FaInstagram className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default teamMembers;
