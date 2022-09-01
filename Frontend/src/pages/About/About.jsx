import React from "react";
import Footer from "../../components/Footer/Footer";
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
              Our pension is a veteran of the pension and room service with many
              years of experience under our belt we are ready to provide you
              with the best service that you can imagine and deserve with
              multiple varity of room available for you or your family to relax
              and have a comfortable time .
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="aboutcontent2">
        <img src={About2} alt="" />
        <p>
          If you are a long term staying customer don't worry because here in
          kokeb pension we here prepared an excellent fully furnished room that
          can accommodate your every needs 24/7 with room service available on
          the tip of your phone to serve your needs with our many years
          experience , wonderful and highly trained employee are our crown
          jewels that gave us our prestigious client All our service are meeting
          and exceeding every standard of quality and sanitation set by the
          standard providing agency.
        </p>
      </div>

      <div className="aboutcontent3">
        <p>
          And another big difference that make us stand out from our other
          competitors in pension and hotel service industry is our ideal
          location that is easy and very convent for transportation or other
          services. Come and enjoy a peaceful time with our pension with high
          end service and hospitality.
        </p>

        <img src={About3} alt="" />
        <h2></h2>
      </div>
      <Room />
      <Footer />
    </div>
  );
};
export default About;
