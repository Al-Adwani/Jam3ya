import React from "react";
import { useParams, useHistory } from "react-router-dom";
import jam3yaStore from "../Store/jam3yaStore";
import { observer } from "mobx-react-lite";
import ModalUpdateJam3ya from "./ModalUpdateJam3ya";

const Jam3yaDetail = () => {
  const { jam3yaSlug } = useParams();
  const history = useHistory();
  if (jam3yaStore.isLoading) return <p>Loading</p>;

  const jam3ya = jam3yaStore.jam3yat.find(
    (jam3ya) => jam3ya.slug === jam3yaSlug
  );
  const enrolls = jam3ya.users.map((enroll) => <p>{enroll.username}</p>);

  const handleJoin = () => {
    if (
      jam3ya.limit >= jam3ya.users.length &&
      new Date(jam3ya.startDate) > new Date()
    ) {
      // needs a compare for the dates
      jam3yaStore.joinJam3ya(jam3ya._id);
    } else {
      alert("Nooooooooooooo");
    }
  };
  const handleLeave = () => {
    jam3yaStore.leaveJam3ya(jam3ya._id);
  };
  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya._id, history);
  };
  return (
    <div>
      <img src={jam3ya.image} />
      <p className="title">{jam3ya.title}</p>
      <p>{jam3ya.startDate}</p>
      <p>{enrolls}</p>
      <p>{jam3ya.amount}</p>
      <p>{jam3ya.startDate}</p>
      <p>{jam3ya.author.username}</p>

      <p>{jam3ya.endDate}</p>

      <button onClick={handleJoin}>Join</button>
      <button onClick={handleLeave}>Leave</button>
      <button onClick={handleDelete}>Delete</button>
      <ModalUpdateJam3ya jam3ya={jam3ya} />
    </div>
  );
};

export default observer(Jam3yaDetail);
