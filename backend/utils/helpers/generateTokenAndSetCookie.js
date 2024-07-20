// import jwt from "jsonwebtoken";

// const generateTokenAndSetCookie = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "15d",
//   });

//   res.cookie("jwt", token, {
//     httpOnly: true, // more secure
//     maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
//     sameSite: "strict", // CSRF
//   });

//   return token;
// };

// export default generateTokenAndSetCookie;

import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // more secure
    //90 days would be
    mazAge: 90 * 24 * 60 * 60 * 1000, // 90 days
    sameSite: "strict", // CSRF
  });

  return token;
};

export default generateTokenAndSetCookie;
