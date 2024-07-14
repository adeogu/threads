// import { useRecoilValue } from "recoil";
// import LoginCard from "../componenets/LoginCard";
// import SignupCard from "../componenets/SignUpCard";
// import authScreenAtom from "../atoms/authAtom";

// const AuthPage = () => {
//   const authScreenState = useRecoilValue(authScreenAtom);

//   return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
// };

// export default AuthPage;

import React from "react";
import { useRecoilValue } from "recoil";
import LoginCard from "../componenets/LoginCard";
import SignupCard from "../componenets/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
  const authScreen = useRecoilValue(authScreenAtom);

  return (
    <div>
      {authScreen === "login" && <LoginCard />}
      {authScreen === "signup" && <SignupCard />}
    </div>
  );
};

export default AuthPage;

//if we are in the login screen, we render the login card, if we are in the signup screen, we render the signup card.
