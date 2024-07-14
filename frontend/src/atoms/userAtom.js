import { atom } from "recoil";

const userAtom = atom({
  key: "userAtom ",
  default: JSON.parse(localStorage.getItem("user-threads")),
  //its either null or the user data
});

export default userAtom;

// the user atom is used to store the user data in the local storage, so that we can keep the user logged in even after the page is refreshed.
// we are using recoil to manage the state of the user data, so that we can access it from anywhere in the application.
