import React, { useEffect, useRef, useState } from "react";
import "./Book.css";
const Book = () => {
  const [book, setBook] = useState({});
  const nameRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  useEffect(() => {
    handleSubmit();
  }, [nameRef, phoneRef, dateRef]);
  const handleSubmit = () => {
    console.log(book);
    setBook({
      Name: nameRef.current.value,
      Phone: phoneRef.current.value,
      Date: dateRef.current.value,
    });
  };
  return (
    <div className="bookcontainer">
      <label htmlFor="">Name:</label>
      <input type="text" placeholder="Abebe kebede" id="name" ref={nameRef} />
      <label htmlFor="">Phone:</label>
      <input type="text" placeholder="Abebe kebede" id="phone" ref={phoneRef} />
      <label htmlFor="">Date to book:</label>
      <input type="date" placeholder="Abebe kebede" id="date" ref={dateRef} />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default Book;
