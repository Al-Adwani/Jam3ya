import React from "react";
import { observer } from "mobx-react-lite";

function SearchBar({setQuery}) {
  
  return (
    <div  className="d-flex" style={{justifyContent: "end"}}>
      <input  className="form-control me-2" style={{width:"25%"}} type="search" placeholder="Search" aria-label="Search" onChange={(event) => setQuery(event.target.value)} />
    </div>
  );
}

export default observer(SearchBar);
