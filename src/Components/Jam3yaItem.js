import React from "react";
import jam3yaStore from "../Store/jam3yaStore";
import { Link } from "react-router-dom";

function Jam3yaItem({ jam3ya }) {
  return (
    <div className="cards">
      <Link to={`/jam3yaList/${jam3ya.slug}`}>
        <img src={jam3ya.image} alt="Jam3ya Img" />
      </Link>
      <h5>{jam3ya.title}</h5>
      <h2>{jam3ya.amount}</h2>
      <h2>{jam3ya.limit}</h2>
      <h2>{jam3ya.amount}</h2>
    </div>
  );
}

export default Jam3yaItem;
