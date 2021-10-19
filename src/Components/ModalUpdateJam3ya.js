import React from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import jam3yaStore from "../Store/jam3yaStore";

function ModalUpdateJam3ya({ jam3ya }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updateJam3ya, setUpdateJam3ya] = useState({
    title: jam3ya.title,
    image: jam3ya.image,
    amount: jam3ya.amount,
    limit: jam3ya.limit,
    startDate: new Date(jam3ya.startDate),
    endDate: new Date(jam3ya.endDate),
  });

  const handleChange = (e) => {
    setUpdateJam3ya({ ...updateJam3ya, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yaStore.updateJam3ya(updateJam3ya, jam3ya._id);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Update Jam3ya Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />

        <form onSubmit={handleSubmit}>
          <br />
          title:
          <input
            value={updateJam3ya.title}
            type="text"
            name="title"
            onChange={handleChange}
          />
          <br />
          image:
          <input
            value={updateJam3ya.image}
            name="image"
            onChange={handleChange}
          />
          <br />
          amount:
          <input
            value={updateJam3ya.amount}
            name="amount"
            onChange={handleChange}
          />
          <br />
          limit:
          <input
            value={updateJam3ya.limit}
            name="limit"
            onChange={handleChange}
          />
          <br />
          startDate:
          <DatePicker
            selected={updateJam3ya.startDate}
            onChange={(date) =>
              setUpdateJam3ya({ ...updateJam3ya, startDate: date })
            }
          />
          <br />
          endDate:
          <DatePicker
            selected={updateJam3ya.endDate}
            onChange={(date) =>
              setUpdateJam3ya({ ...updateJam3ya, endDate: date })
            }
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalUpdateJam3ya;
