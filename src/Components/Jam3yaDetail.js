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

  return (
    <div>
      <img src={jam3ya.image} />
      <p className="title">{jam3ya.title}</p>
    </div>
  );
};

export default observer(Jam3yaDetail);
