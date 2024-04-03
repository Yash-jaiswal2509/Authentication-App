import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hi its working",
  });
});

export default router;
