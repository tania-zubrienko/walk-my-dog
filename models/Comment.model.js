const { Schema, model } = require("mongoose");
const User = require("./User.model")

const commentSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    carer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    commentText: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5]
    }
  },
  {
    timestamps: true
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
