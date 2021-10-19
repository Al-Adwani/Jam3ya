import { observer } from "mobx-react-lite";
import React from "react";
import jam3yaStore from "../Store/jam3yaStore";
import Jam3yaItem from "./Jam3yaItem";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Jam3yaList() {
  const [query, setQuery] = useState("");

  const jam3yaList = jam3yaStore.jam3yat
    .filter((jam3ya) => jam3ya.title.toLowerCase().includes(query))
    .map((jam3ya) => {
      return <Jam3yaItem jam3ya={jam3ya} key={jam3ya.id} />;
    });
  console.log(jam3yaList);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {jam3yaList}
    </div>
  );
}

export default observer(Jam3yaList);
