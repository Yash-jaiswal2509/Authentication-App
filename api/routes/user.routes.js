import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { updateUser,deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hi its working",
  });
});

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
