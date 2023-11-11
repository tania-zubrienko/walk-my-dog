const { Schema, model } = require("mongoose");
const User = require("./User.model")
const bookingSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    carer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    dateStart: {
      type: Date,
      required: true
    },
    dateFinish: {
      type: Date,
      required: true
    },
    tel: {
      type: String, //aplicar regex
      required: true
    },
    direction: {
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    petType: {
      type: String,
      required: true
    },
    petNumber: {
      type: Number,
      required: true
    },
    comments: {
      type: String,
    },
    status: {
      type: String,
      enum: ["PENDING", "ACCEPTED", "CANCELED"],
      default: "PENDING"
    }
  },
  {
    timestamps: true
  }
);

const Booking = model("Booking", bookingSchema);

module.exports = Booking;
