import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
dotenv.config();

connectDb();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`),
);
