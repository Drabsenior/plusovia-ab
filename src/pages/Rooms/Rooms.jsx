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
          Our Master bed rooms are the highest levels of our service encompassing all our high end quality service this will be a choice you won't regret.
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
        If you are a long term staying customer don't worry because here in kokeb pension we here prepared an  excellent fully  furnished room that can accommodate your every needs 24/7 with room service available on the tip of your phone to serve your needs with our many years experience , wonderful and highly trained employee are our crown jewels that gave us our prestigious client All our service are meeting and exceeding every standard of quality and sanitation set by the standard providing agency.
        </p>
      </div>
      <Youtube />
      <Logo />
    </div>
  );
};

export default Rooms;
