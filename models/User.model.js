const { Schema, model } = require("mongoose");
const Booking = require("./Booking.model")
const Comment = require("./Comment.model")
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    adress: {
      type: {
        type: String,
      },
      coordinates: {
        type: [Number],
      }
    },
    description: {
      type: String,
    },
    avatar: {
      type: String,
      //default: ""       
    },
    comment: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    booking: [{
      type: Schema.Types.ObjectId,
      ref: 'Booking'
    }],
    role: {
      type: String,
      required: true,
      default: 'USER',
      enum: ['USER', 'CARER', 'ADMIN']
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
