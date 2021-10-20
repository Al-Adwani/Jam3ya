import React from "react";
import jam3yaStore from "../Store/jam3yaStore";
import { Link } from "react-router-dom";

function Jam3yaItem({ jam3ya }) {
  return (
    
      <div className="card col-md-3 card border-primary m-5 " style={{ width: "16rem;" }}>
        <img src={jam3ya.image} className="card-img-top" alt= "NO IMAGE!" />
        <div className="card-body">
          <h5 className="card-title">{jam3ya.title}</h5>
          <p className="card-text">Amount: {jam3ya.amount}</p>
          <p className="card-text">Limit: {jam3ya.limit}</p>
          <p className="card-text">Amount: {jam3ya.amount}</p>

          <Link to={`/jam3yaList/${jam3ya.slug}`}>
            <button>Go to Details</button>
          </Link>
        
      </div>
    </div>
  );
}

export default Jam3yaItem;
