import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ messaage: "Hola amigo" });
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
