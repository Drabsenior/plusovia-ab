import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";
import "./Room.css";
const Rooms = () => {
  const items = [
    {
      image:
        "https://static01.nyt.com/images/2020/10/25/realestate/19shopping1/oakImage-1602795344944-mobileMasterAt3x.jpg",
      name: "Master Bed Room Sweet",
      price: "3000birr",
    },
    {
      image:
        "https://www.naturalbedcompany.co.uk/wp-content/uploads/Cochin-bed-in-cherry-MAIN.jpg",
      name: "Master Bed Room Sweet",
      price: "3000birr",
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
