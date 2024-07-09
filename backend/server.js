import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import express from "express";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares
app.use(cookieParser());
// Routes
app.use("/api/users", userRoutes);
// http://localhost:5000 => backend,frontend

server.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
