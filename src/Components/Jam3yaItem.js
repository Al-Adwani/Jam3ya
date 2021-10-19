import React from "react";
import jam3yaStore from "../Store/jam3yaStore";

function Jam3yaItem({ jam3ya }) {
  // const jam3ya = props.jam3ya;

  return (
    <div>
      <img src={jam3ya.image} alt="Jam3ya Img" />
      <h5>{jam3ya.title}</h5>
    </div>
  );
}

export default Jam3yaItem;
