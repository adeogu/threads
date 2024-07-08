//model is the blue print of the data that we are going to store in the database

import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    //the line above is creating a new schema for the user
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    followers: {
      type: [String],
      default: [],
    },
    following: {
      type: [String],
      default: [],
    },
    bio: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    //allows us to see when the user was created and when the user was updated
  },
);

const User = mongoose.model("User", userSchema);
//in simple terms, we are creating a model called User and we are passing the userSchema to it
//we dont use users because mongoose will automatically pluralize it to users

export default User;
