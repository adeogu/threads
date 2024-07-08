import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";




dotenv.config();

connectDb();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
//allows to parse json data in the req.body


app.use(express.urlencoded({ extended: true }));
//used to parse the data coming from the form in the req.body


app.use(cookieParser());

//Routes
app.use("/api/users", userRoutes)





app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`),
);
