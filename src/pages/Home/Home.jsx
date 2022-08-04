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
   Welcome to our little paradise were you can enjoy and relax after a hard day of work in our clean and peaceful pension with every service are at the highest standard.
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
          <span>What makes our pension the best?</span>
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
          <span>What makes our pension the best?</span>
          <p>
Our   quiet and peaceful location is what give our customers the hightest satisfaction for it's an ideal place to calm and relax where your body need it's rest. Our cool and calm environment is not our only edge to our pension rather also it's friendly and hard working staff that always ready to serve your every need for your happiness is our most valued treasure. Don't waste any more of your precious time and book our rooms and enjoy the best service your dreaming of for we are prepared to make your time with us the best for our client deserve the best.
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
