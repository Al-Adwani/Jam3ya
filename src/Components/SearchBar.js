import React from "react";
import { observer } from "mobx-react-lite";

function SearchBar({setQuery}) {
  
  return (
    <div>
      <input onChange={(event) => setQuery(event.target.value)} />
    </div>
  );
}

export default observer(SearchBar);
