import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoute from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";
import cors from "cors"
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to your DB");
  })
  .catch((error) => console.log("Connection Failed!!", error));


app.use(express.json());
app.get("/", (req, res) => {
  res.json({ messaage: "Hola amigo" });
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message;

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
