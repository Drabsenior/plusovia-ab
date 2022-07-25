import React from "react";
import Room from "../../components/Room/Room";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "./Rooms.css";
import Youtube from "../../components/Youtube/Youtube";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Room1 from "../../assets/Images/roomimage.png";
import About1 from "../../assets/Images/about2.png";
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
          <img src={Room1} alt="" />
        </div>
      </div>
      <Room />
      <div className="aboutcontent2">
        <img src={About1} alt="" />
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
