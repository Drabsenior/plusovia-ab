const express = require("express");
const mongoose = require("mongoose");
const Booking = require("./models/BookingSchema");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const Pusher = require("pusher");
const app = express();
const {
  registerUser,
  loginUser,
  getMe,
} = require("./controllers/userController");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(
  "mongodb+srv://AbenezerMaregu:Truealpha123@cluster0.o4gs8he.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const pusher = new Pusher({
  appId: "1477244",
  key: "5a7bef362fc9a24e832d",
  secret: "1b6bce3e471dbbf24433",
  cluster: "ap2",
  useTLS: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");
  const msgcollection = db.collection("bookings");
  const changeStream = msgcollection.watch();

  changeStream.on("change", (change) => {
    console.log("change occured", change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("message", "inserted", {
        fullName: messageDetails.fullName,
        room: messageDetails.room,
        phone: messageDetails.phone,
        date: messageDetails.date,
        createdAt: messageDetails.createdAt,
      });
    } else {
      console.log("error triggering pusher");
    }
  });
});
app.get("/read", async (req, res) => {
  Booking.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  }).sort({ createdAt: -1 });
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
app.use("/auth/kokebpension", userRoutes);
app.use("/auth/kokebpension/login", loginUser);

app.listen(5000, () => {
  console.log("Listening at server 5000...");
});
