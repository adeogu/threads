import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //to avoid warnings in the console
      useUnifiedTopology: true,
      //this is to avoid deprecation warnings
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
    //exitingp process with failure
  }
};

export default connectDb;
