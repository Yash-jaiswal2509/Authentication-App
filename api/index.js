import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));
