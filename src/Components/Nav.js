import React from "react";
import { Link } from "react-router-dom";
import userAuthStore from "../Store/userAuthStore";
import { observer } from "mobx-react-lite";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h3>{userAuthStore.user.username}</h3>
      <button onClick={() => userAuthStore.logout()}>log out</button>
    </div>
  );
}

export default observer(Nav);
