import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";
import path from "path";

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to your DB");
  })
  .catch((error) => console.log("Connection Failed!!", error));

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(cookieParser());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.get("/", (req, res) => {
  res.json({ messaage: "Hola amigo" });
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message;

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
