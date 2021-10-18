import { observer } from "mobx-react-lite";
import React from "react";
import jam3yaStore from "../Store/jam3yaStore";
import Jam3yaItem from "./Jam3yaItem";

function Jam3yaList() {
      console.log(jam3yaStore.jam3yat)
  const jam3yaList = jam3yaStore.jam3yat.map((jam3ya) => {
    return <Jam3yaItem jam3ya={jam3ya} key={jam3ya.id} />;
  });
  console.log(jam3yaList);
  return <div>{jam3yaList}</div>;
}

export default observer(Jam3yaList);
