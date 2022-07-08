import React from "react";
import Room from "../../components/Room/Room";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "./Rooms.css";
import Youtube from "../../components/Youtube/Youtube";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
const Rooms = () => {
  return (
    <div className="roompagewrapper">
      <Navbar />
      <div className="roompagetopcontain">
        <div className="roompageleft">
          <h3>Master Bed room sweet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div className="roomprice">
            <span>2400 birr</span>
            <div className="roomicons">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <ul>Including</ul>
          <li>
            <BsDot />
            Bathroom
          </li>
          <li>
            <BsDot />
            Tv
          </li>
          <li>
            <BsDot />
            Cooler and microwave
          </li>
          <div className="roombutton">
            <button>Book Now</button>
          </div>
        </div>
        <div className="roompageright">
          <img
            src="https://homedecorideas.eu/wp-content/uploads/2019/07/Master-Bedroom-Inspirations-By-Top-Interior-Designers-2-1.jpg"
            alt=""
          />
        </div>
      </div>
      <Room />
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
          ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Youtube />
      <Logo />
    </div>
  );
};

export default Rooms;
