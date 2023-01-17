import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { IoLogoGoogleplus } from "react-icons/io";

function Footer() {
  return (
    <div>
      <div className="footer-conainer" id="get">
        <div className="footer-1">
          <h1>Get in touch</h1>
          <div className="input-name">
            <input type="text" placeholder="First Name"></input>
            <input
              type="text"
              className="lastname"
              placeholder="Last Name"
            ></input>
          </div>
          <label>Email*</label>
          <input className="input-email" type="email" />
          <label>Comment or Message *</label>
          <textarea className="footer-com" type="text" />
          <button className="footer-but">Submit</button>
        </div>
        <div className="footer-2">
          <h1>How to reach us</h1>
          <div className="adr">
            <h5 className="h5">Address</h5>
            <p>360 Rue Saint-Jacques Montréal, QC H2Y 1P5 Canada</p>
          </div>
          <div className="pho">
            <h5 className="h5">Phone</h5>
            <p>+1 514 883 1234</p>
          </div>
          <div className="wor">
            <h5 className="h5">Working Hours</h5>
            <p>Mon – Fri: 8:30am – 7:30pm Sat: 8:30am – 3:30pm</p>
          </div>
        </div>
      </div>
      <div className="border">
        <div className="icons">
          <a>
            <BsFacebook />
          </a>
          <a>
            <BsInstagram />
          </a>
          <a>
            <BsPinterest />
          </a>
          <a>
            <BsLinkedin />
          </a>
          <a>
            <BsTwitter />
          </a>
          <a>
            <IoLogoGoogleplus />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
