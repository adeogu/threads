// import { atom } from "recoil";

// const userAtom = atom({
//   key: "userAtom",
//   default: JSON.parse(localStorage.getItem("user-threads")),
//   // this ges the user data from the local storage, so that we can keep the user logged in even after the page is refreshed.
// });
// export default userAtom;
// // the user atom is used to store the user data in the local storage, so that we can keep the user logged in even after the page is refreshed.
// // we are using recoil to manage the state of the user data, so that we can access it from anywhere in the application.

import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom",
  default: JSON.parse(localStorage.getItem("user-threads")) || {
    id: "",
    name: "",
    username: "",
    email: "",
    bio: "",
    profilePic: "",
  },
  // this gets the user data from the local storage, so that we can keep the user logged in even after the page is refreshed.
});

export default userAtom;
