import React from "react";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Room from "../../components/Room/Room";
import "./About.css";
const About = () => {
  return (
    <div className="aboutwrapper">
      <Navbar />
      <div className="aboutcontain">
        <div className="aboutustop">
          <img
            src="https://stylesatlife.com/wp-content/uploads/2019/12/latest-bed-designs-in-2020.jpg"
            alt=""
          />
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
        <img
          src="https://us.123rf.com/450wm/belchonock/belchonock1903/belchonock190302428/122290271-comfortable-bed-with-new-mattress-in-room-healthy-sleep.jpg?ver=6"
          alt=""
        />
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

        <img
          src="https://us.123rf.com/450wm/belchonock/belchonock1903/belchonock190302428/122290271-comfortable-bed-with-new-mattress-in-room-healthy-sleep.jpg?ver=6"
          alt=""
        />
      </div>
      <Room />
      <Logo />
    </div>
  );
};
export default About;
