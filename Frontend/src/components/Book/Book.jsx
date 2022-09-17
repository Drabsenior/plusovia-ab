import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "../Singleroom/Singleroom";
import Axios from "axios";
import "./Book.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Book = () => {
  const [book, setBook] = useState({});
  const [booked, setBookded] = useState([]);
  const nameRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();

  const { Id } = useParams();
  const room = items.find((roo) => roo.id === parseInt(Id));
  useEffect(() => {
    Axios.get("https://kokebpension.herokuapp.com/read").then((response) => {
      setBookded("man");
      console.log(booked);
    });
  }, []);
  const current = new Date();
  const currentdate = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;

  console.log(currentdate);

  const notify = (arg) => {
    if (arg === "success") {
      toast.success("Booked successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
    } else if ("empty") {
      toast.error("Fileds are empty!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };
  const handleSubmit = () => {
    if (
      !nameRef.current.value ||
      !phoneRef.current.value ||
      !dateRef.current.value
    ) {
      notify("empty");
    }
    Axios.post("https://kokebpension.herokuapp.com/book", {
      fullname: nameRef.current.value,
      roomname: room.name,
      phone: phoneRef.current.value,
      date: dateRef.current.value,
    }).then(() => {
      notify("success");
      nameRef.current.value = "";
      phoneRef.current.value = "";
      dateRef.current.value = "";
    });
    const mxdate = `${
      current.getFullYear() + 1
    }-${current.getMonth()}-${current.getDate()}`;
    console.log(mxdate);
    console.log(book);
    // setBook({
    //   Name: nameRef.current.value,
    //   Phone: phoneRef.current.value,
    //   Date: dateRef.current.value,
    // });
  };

  return (
    <div className="bookingwrapper">
      <div className="borderwrapper">
        <h2>Booking Form</h2>
        <div className="bookcontainer">
          <div className="inputsbooking">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              ref={nameRef}
            />
          </div>
          <div className="inputsbooking">
            <label htmlFor="">Phone:</label>
            <input
              type="number"
              placeholder="Phone Number"
              id="phone"
              ref={phoneRef}
            />
          </div>
          <div className="inputsbooking">
            <label htmlFor="">Date to book:</label>
            <input
              type="date"
              id="date"
              ref={dateRef}
              min={currentdate}
              max={currentdate}
            />
          </div>
          <button onClick={() => handleSubmit()}>Submit</button>
          <ToastContainer />
        </div>

        {/* <h1>{item.roomname}</h1>
      <h2>{item.fullName}</h2>
      <h2>{item.phone}</h2>
    <span>{item.date}</span> */}
      </div>
    </div>
  );
};

export default Book;
