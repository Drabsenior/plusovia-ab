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
           Our pension is a veteran of the pension and room service with many years of experience under our belt we are ready to provide you with the best service that you can imagine and deserve with multiple varity of room available 
           for you or your family to relax and have a comfortable time .
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="aboutcontent2">
        <img src={About2} alt="" />
        <p>
        If you are a long term staying client don't worry because here in kokeb pension we prepared excellent furnished room that can accommodate your needs and 24/7 available room service on the tip of your phone with our many years experience and wonderful employee we have made high quality standard with our clients.
        </p>
      </div>

      <div className="aboutcontent3">
        <p>
And another big difference that make us stand out from our other competitors in pension and hotel service industry is our ideal location that is easy and very convent for transportation or other services. Come and enjoy a peaceful time with our pension with high end service and hospitality.
        </p>

        <img src={About3} alt="" />
      </div>
      <Room />
      <Logo />
    </div>
  );
};
export default About;
