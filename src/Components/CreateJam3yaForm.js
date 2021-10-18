import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import jam3yaStore from "../Store/jam3yaStore";
import userAuthStore from "../Store/userAuthStore";


function CreateJam3yaForm() {

  const [createJam3ya, setCreateJam3ya] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: "",
    endDate: "",
  });
  const handleChange= (e) => {
    setCreateJam3ya({ ...createJam3ya, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yaStore.CreateJam3yaForm(createJam3ya, userAuthStore.user)
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="title" />
        <input placeholder="image" />
        <input placeholder="amount" />
        <input placeholder="limit" />
        <input placeholder="startDate" />
        <input placeholder="endDate" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateJam3yaForm;
