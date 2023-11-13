const { Schema, model } = require("mongoose");
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
    phone: {
      type: String, //aplicar regex
      required: true
    },
    address: {
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
    bookingNotes: {
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
