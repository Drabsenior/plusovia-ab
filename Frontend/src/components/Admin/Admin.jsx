import React from "react";
import "./Admin.css";
import pic from "../../assets/Images/logo.png";
import Pusher from "pusher-js";
import axios from "../../axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Admin = () => {
  const [bookings, setBookings] = useState();
  useEffect(() => {
    axios
      .get("/read")

      .then((response) => {
        console.log(response.data);
        setBookings(response.data);
      });
  }, []);
  useEffect(() => {
    const pusher = new Pusher("5a7bef362fc9a24e832d", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", function (newmessage) {
      alert(JSON.stringify(newmessage));
      setBookings([...bookings, newmessage]);
    });
  }, [bookings]);

  return (
    <div className="adminwholecontainer">
      <div className="adminpagecontainer">
        <div className="adminnav">
          <div className="loginnavitems">
            <img src={pic} alt="" />
            <Link to="/auth/kokebpension">
              <button>Logout</button>
            </Link>
          </div>
        </div>
        <div className="adminsidebar">
          <div className="logotitle">
            <h2>Kokeb Pension</h2>
          </div>
          <hr />
          <div className="sidebarroutes">
            <span>Bookings</span>
            <span>Rooms</span>
          </div>
        </div>
      </div>
      <div className="adminviewpagecontainer">
        {bookings
          ? bookings.map((item) => {
              const dde = new Date(item.createdAt);
              const createdat = new Date(item.createdAt).toLocaleTimeString();
              return (
                <div className="bookingitem">
                  <div className="bedroomname">
                    <h2>{item.room}</h2>
                  </div>
                  <div className="bedroomdetail">
                    <span>Name: {item.fullName}</span>
                    <span>Phone: {item.phone}</span>
                    <span>Booked for : {item.date}</span>
                  </div>
                  <div className="bedroomtime">
                    <span>{createdat}</span>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Admin;
