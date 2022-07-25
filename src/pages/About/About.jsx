import React from "react";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Room from "../../components/Room/Room";
import About1 from "../../assets/Images/about1.png";
import About2 from "../../assets/Images/about2.png";
import About3 from "../../assets/Images/about3.png";
import "./About.css";
const About = () => {
  return (
    <div className="aboutwrapper">
      <Navbar />
      <div className="aboutcontain">
        <div className="aboutustop">
          <img src={About1} alt="" />
          <div className="abouttopcontent">
            <h2>About us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="aboutcontent2">
        <img src={About2} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.{" "}
        </p>
      </div>

      <div className="aboutcontent3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.{" "}
        </p>

        <img src={About3} alt="" />
      </div>
      <Room />
      <Logo />
    </div>
  );
};
export default About;
