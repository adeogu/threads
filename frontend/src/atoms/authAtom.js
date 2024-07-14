import { atom } from "recoil";

const authScreenAtom = atom({
  key: "authScreenAtom",
  default: "login",
});

export default authScreenAtom;

//we created atoms ,each athom is a state where we can use wherever we want
//but in rorder to do so we have to go to main jsx and wrap our application with RecoilRoot

//we have one atom for the authentication screen, one for the user.

//it sets the page to login by default, but we can change it to signup when we click the link in the login page.
