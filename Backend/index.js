const express = require("express");
const mongoose = require("mongoose");
const Booking = require("./models/BookingSchema");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://AbenezerMaregu:Truealpha123@cluster0.o4gs8he.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
app.get("/read", async (req, res) => {
  Booking.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});
app.post("/book", async (req, res) => {
  const fullName = req.body.fullname;
  const roomname = req.body.roomname;
  const phone = req.body.phone;
  const date = req.body.date;
  const book = new Booking({
    fullName: fullName,
    room: roomname,
    phone: phone,
    date: date,
  });
  try {
    await book.save();
    res.send("data is inserted");
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Listening at server 5000...");
});
