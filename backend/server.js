import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();
console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line to check the MONGO_URI value

const app = express();
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Routes
app.use("/api/users", userRoutes);
// http://localhost:5000 => backend,frontend

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
