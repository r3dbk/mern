import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();

// Constants

const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleware

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("uploads"));

// Routes

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

async function start() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mern-social");

    app.listen(3002, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}
start();
