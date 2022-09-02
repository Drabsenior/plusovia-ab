const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const books = mongoose.model("Booking", BookingSchema);
module.exports = books;
