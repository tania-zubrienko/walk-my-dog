const { Schema, model } = require("mongoose");
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
    address: {
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
    role: {
      type: String,
      required: true,
      default: 'USER',
      enum: ['USER', 'CARER', 'ADMIN']
    }
  },
  {
    timestamps: true
  }
);

userSchema.index({ location: '2dsphere' })

const User = model("User", userSchema);

module.exports = User;
