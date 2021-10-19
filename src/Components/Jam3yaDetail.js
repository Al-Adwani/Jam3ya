import React from "react";
import { useParams } from "react-router-dom";
import jam3yaStore from "../Store/jam3yaStore";
import { observer } from "mobx-react-lite";

const Jam3yaDetail = () => {
  const { jam3yaSlug } = useParams();
  if (jam3yaStore.isLoading) return <p>Loading</p>;
  
  const jam3ya = jam3yaStore.jam3yat.find(
    (jam3ya) => jam3ya.slug === jam3yaSlug
  );
  const enrolls = jam3ya.users.map((enroll) => <p>{enroll.username}</p>)
  const handleSubmit = () => {
    
    jam3yaStore.joinJam3ya(jam3ya._id);
  };
  return (
    <div>
      <img src={jam3ya.image} />
      <p className="title">{jam3ya.title}</p>
      <p>{jam3ya.startDate}</p>
      <p >{enrolls}</p>


      <button onClick={handleSubmit}>Join</button>
    </div>
  );
};

export default observer(Jam3yaDetail);
