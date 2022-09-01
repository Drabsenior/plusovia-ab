import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import "./Singleroom.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Room1 from "../../assets/Images/room1.png";
import Room2 from "../../assets/Images/room2.png";
import Room3 from "../../assets/Images/room3.png";
import Footer from "../Footer/Footer";
import Rooms from "../Room/Room";
export const items = [
  {
    id: 1,
    image: Room1,
    name: "Master Bed Room Sweet",
    price: "800birr",
    desc: "Our Master bed rooms are the highest levels of our service encompassing all our high end quality service this will be a choice you won't regret.",
    includes: ["tv", "Microwave", "bathroom"],
  },
  {
    id: 2,
    image: Room2,
    name: "Double Bed Room",
    price: "600birr",
    desc: "Our Master bed rooms are the highest levels of our service encompassing all our high end quality service this will be a choice you won't regret.",
    includes: ["tv", "Microwave", "bathroom"],
  },
  {
    id: 3,
    image: Room3,
    name: "Single Bed Room",
    price: "450birr",
    desc: "Our Master bed rooms are the highest levels of our service encompassing all our high end quality service this will be a choice you won't regret.",
    includes: ["tv", "Microwave", "bathroom"],
  },
];
const Singleroom = () => {
  const { Id } = useParams();
  const room = items.find((roo) => roo.id === parseInt(Id));
  console.log(items);
  console.log(room);
  console.log(typeof Id);

  return (
    <>
      <Navbar />
      <div className="singleroomcontainer">
        <div className="roompagetopcontain">
          <div className="roompageleft">
            <h3>{room.name}</h3>
            <p>{room.desc}</p>
            <div className="roomprice">
              <span>{room.price}</span>
              <div className="roomicons">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <ul>Including</ul>
            {room.includes.map((inc) => {
              return (
                <li>
                  <BsDot />
                  {inc}
                </li>
              );
            })}

            <div className="roombutton">
              <Link to={`/book/${room.id}`}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>
          <div className="roompageright">
            <img src={room.image} alt="" />
          </div>
        </div>
      </div>
      <Rooms />
      <Footer />
    </>
  );
};

export default Singleroom;
