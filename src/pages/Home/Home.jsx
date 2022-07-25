import React from "react";
import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar";
import Rooms from "../../components/Room/Room";
import Youtube from "../../components/Youtube/Youtube";
import "./Home.css";
import Kokeb1 from "../../assets/Images/kokeb1.png";
import Building from "../../assets/Images/penbuild.png";
const Home = () => {
  return (
    <div className="homewrapper">
      <Navbar />
      <div className="hometopcontent">
        <img src={Kokeb1} alt="" id="image1" />
        <div className="hometopdesc">
          <div className="hometitle">
            <h2 className="head1">Pension</h2>
            <h2 className="head2">Addis abeba</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <button>Book Now</button>
        </div>
      </div>
      <Rooms />
      <Youtube />
      <div className="homebottommobile">
        <img
          src="https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBoYWxsd2F5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt=""
        />
        <div className="homebottomdescmobile">
          <span>Lorem ipsum dolor sit amet</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="homebottomcontent">
        <div className="homebottomleft">
          <span>Lorem ipsum dolor sit amet</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="homebottomright">
          <img src={Building} alt="" />
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default Home;
