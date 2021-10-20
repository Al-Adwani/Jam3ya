import React, { useState } from "react";
import Jam3yaList from "./Jam3yaList";
import userAuthStore from "../Store/userAuthStore";
import SignInSignUpForm from "./SignInSignUpForm";
import Nav from "./Nav";
import ModalCreateJam3ya from "./ModalCreateJam3ya";
import { observer } from "mobx-react";
import Jam3yaItem from "./Jam3yaItem";
function Home() {
  return (
    <div>
      {userAuthStore.user === null ? (
        <SignInSignUpForm />
      ) : (
        <div className="HomeStyle">
          <ModalCreateJam3ya />
          <Jam3yaList />
        </div>
      )}
    </div>
  );
}

export default observer(Home);
