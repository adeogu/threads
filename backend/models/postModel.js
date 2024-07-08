import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    //the code above is referencing the user model
    ref: "User",
    required: true,
  },

  text: {
    type: String,
    maxLength: 500,
  },

  img: {
    type: String,
  },

  likes: {
    type: Number,
    default: 0,
  },

  replies: [
    {
      userId: {
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      userProfilePic: {
        type: String,
      },
      username: {
        type: String,
      },
    },
  ]
},{

  timestamps: true,
  //allows us to see when the post was created and when the post was updated
});


