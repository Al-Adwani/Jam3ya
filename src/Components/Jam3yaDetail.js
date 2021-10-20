import React from "react";
import { useParams, useHistory } from "react-router-dom";
import jam3yaStore from "../Store/jam3yaStore";
import { observer } from "mobx-react-lite";
import ModalUpdateJam3ya from "./ModalUpdateJam3ya";
import Moment from "react-moment";

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
      jam3yaStore.joinJam3ya(jam3ya._id);
    } else {
      alert("This Jam3ya is full");
    }
  };
  const handleLeave = () => {
    jam3yaStore.leaveJam3ya(jam3ya._id);
  };
  const handleDelete = () => {
    jam3yaStore.deleteJam3ya(jam3ya._id, history);
  };
  return (
    <div className="jam3yaDetail">
      <div
        className="card col-md-3 card border-primary m-5 "
        style={{ width: "16rem;" }}
      >
        <img src={jam3ya.image} className="card-img-top" alt="NO IMAGE!" />
        <div className="card-body">
          <h5 className="card-title">Jam3ya Name:{jam3ya.title}</h5>
          <p>Created By: {jam3ya.author.username}</p>
          <p className="card-text">Amount: {jam3ya.amount}</p>
          <p className="card-text">Limit: {jam3ya.limit}</p>
          <p className="card-text">Amount: {jam3ya.amount}</p>
          <p className="card-text">
            Start Date: <Moment format="YYYY/MM/DD">{jam3ya.startDate}</Moment>
          </p>
          <p className="card-text">
            End Date: <Moment format="YYYY/MM/DD">{jam3ya.endDate}</Moment>
          </p>

          <button onClick={handleJoin}>Join</button>
          <button onClick={handleLeave}>Leave</button>
          <button onClick={handleDelete}>Delete</button>
          <ModalUpdateJam3ya jam3ya={jam3ya} />
        </div>
      </div>

      <div className="enroll">
        <h3>List of enrollment</h3>
        <h2> {enrolls}</h2>
      </div>
    </div>
  );
};

export default observer(Jam3yaDetail);
