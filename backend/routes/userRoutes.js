import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("SignedUP sucesssfully");

});


export default router;