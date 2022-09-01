import React from "react";
import "./Footer.css";
import Logokokeb from "../../assets/Images/logo.png";
import youtubeicon from "../../assets/social/youtube.png";
import instaicon from "../../assets/social/insta.png";
import twittericon from "../../assets/social/twitter.png";
import facebookicon from "../../assets/social/facebook.png";
const Footer = () => {
  return (
    <div className="footercontainer">
      <div className="footer1container">
        <img className="logofooter" src={Logokokeb} alt="" />
        <h2>Kokeb Pension</h2>
        <div className="socialicons">
          <img className="facebookicon" src={facebookicon} alt="" />
          <img className="twittericon" src={twittericon} alt="" />
          <img className="instaicon" src={instaicon} alt="" />
          <img className="youtubeicon" src={youtubeicon} alt="" />
        </div>
      </div>
      <div className="footer2container">
        <h2>About us</h2>
        <p>
          We are experieced and high quality pension service providers with many
          years of experience here to provide you the best of services .
        </p>
      </div>
      <div className="footer3container">
        <h2>Contact</h2>
        <p>kokeb 4 kilo atlas </p>
        <p>+251 945 58 48 </p>
        <p>kokebpension@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
