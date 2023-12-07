import mongoose, { Mongoose } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    username: { type: String },
    title: { type: String, required: true },
    text: { type: String, required: true },
    imgUrl: { type: String, defualt: "" },
    views: { type: Number, defualt: 0 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
