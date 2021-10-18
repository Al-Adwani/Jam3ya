import React from "react";
import Jam3yaList from "./Jam3yaList";
import userAuthStore from "../Store/userAuthStore";
import SignInSignUpForm from "./SignInSignUpForm";
import Nav from "./Nav"
function Home() {
  return (
    <div> 
      {userAuthStore.user === null ? <SignInSignUpForm/> : 
      <>
      <Nav/> 
      <Jam3yaList/>
      </>
      }
    </div>
  );
}

export default Home;
