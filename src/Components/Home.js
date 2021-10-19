import React, { useState } from "react";
import Jam3yaList from "./Jam3yaList";
import userAuthStore from "../Store/userAuthStore";
import SignInSignUpForm from "./SignInSignUpForm";
import Nav from "./Nav";
import ModalCreateJam3ya from "./ModalCreateJam3ya";
import { observer } from "mobx-react";
function Home() {
  return (
    <div>
      {userAuthStore.user === null ? (
        <SignInSignUpForm />
      ) : (
        <>
          <ModalCreateJam3ya />
          <Nav />
          {/* <CreateJam3yaForm/> dont delete it works*/}
          <Jam3yaList />
        </>
      )}
    </div>
  );
}

export default observer(Home);
