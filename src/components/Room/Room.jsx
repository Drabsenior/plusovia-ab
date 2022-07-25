import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";
import "./Room.css";
import Room1 from "../../assets/Images/room1.png";
import Room2 from "../../assets/Images/room2.png";
import Room3 from "../../assets/Images/room3.png";
const Rooms = () => {
  const items = [
    {
      image: Room1,
      name: "Master Bed Room Sweet",
      price: "800birr",
    },
    {
      image: Room2,
      name: "Double Bed Room",
      price: "600birr",
    },
    {
      image: Room3,
      name: "Single Bed Room",
      price: "450birr",
    },
  ];
  return (
    <div className="roomswrapper">
      <div className="roomheading">
        <span>Rooms</span>
      </div>
      <div className="roomitemcontain">
        {items.map((item) => {
          return (
            <div className="roomitem">
              <img src={item.image} alt="" />
              <div className="roomdetail">
                <h2>{item.name}</h2>
                <div className="roomrateicon">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <span>{item.price}</span>
                <div className="roomarrowicon">
                  <CgArrowLongRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
