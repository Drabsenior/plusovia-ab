import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbarwrapper">
      <div className="navlogo">
        <img
          src="https://thumbs.dreamstime.com/b/b-letter-boutique-logo-design-159417325.jpg"
          alt=""
        />
      </div>
      <div className="Mobilescreen">
        <div className="MenuIcon" onClick={handleOpen}>
          <HiMenu />
        </div>
        <div className={`${isOpen ? "MobileMenu" : "CloseMenu"}`}>
          <div
            className={`${isOpen ? "OpenIcon" : "CloseIcon"}`}
            onClick={handleOpen}
          >
            {" "}
            <VscChromeClose color="black" size={18} />
          </div>
          <ul>
            <Link to="/">
              {" "}
              <li onClick={handleOpen}> Home </li>
            </Link>{" "}
            <Link to="/about">
              {" "}
              <li onClick={handleOpen}>About us</li>
            </Link>
            <Link to="/rooms">
              {" "}
              <li onClick={handleOpen}> Rooms</li>
            </Link>
            <button>Book Now</button>
          </ul>
        </div>
      </div>
      <div className="navlinks">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About us</li>
          </Link>

          <Link to="/rooms">
            <li>Rooms </li>
          </Link>

          <button>Book Now</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
