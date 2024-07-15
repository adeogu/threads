import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
connectDB(); // Connect to MongoDB
console.log("MONGO_URI:", process.env.MONGO_URI); // Add this line to check the MONGO_URI value

const app = express();
//create a express server
const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware
app.use(express.json()); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); //To parse form data un the req.body
//req.body is in simple terms the data that is sent to the server from the client, it can be in the form of a JSON object or a form data
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
