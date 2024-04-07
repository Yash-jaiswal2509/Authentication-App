import express from "express";
import { verifyToken } from "../utils/verifyUrer.js";
import { updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hi its working",
  });
});

router.post("/update/:id", verifyToken, updateUser);
export default router;
