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
        <Modal.Header />

        <form className="createJam" style={{ width: "25rem;" }} onSubmit={handleSubmit}>
        <h3 className="cmj">Update the Jam3ya</h3>
          <br />
          title:
          <input className="form-control me-2"
            value={updateJam3ya.title}
            type="text"
            name="title"
            onChange={handleChange}
          />
          <br />
          image:
          <input className="form-control me-2"
            value={updateJam3ya.image}
            name="image"
            onChange={handleChange}
          />
          <br />
          amount:
          <input className="form-control me-2"
            value={updateJam3ya.amount}
            name="amount"
            onChange={handleChange}
          />
          <br />
          limit:
          <input className="form-control me-2"
            value={updateJam3ya.limit}
            name="limit"
            onChange={handleChange}
          />
          <br />
          startDate:
          <DatePicker className="form-control me-2"
            selected={updateJam3ya.startDate}
            onChange={(date) =>
              setUpdateJam3ya({ ...updateJam3ya, startDate: date })
            }
          />
          <br />
          endDate:
          <DatePicker className="form-control me-2"
            selected={updateJam3ya.endDate}
            onChange={(date) =>
              setUpdateJam3ya({ ...updateJam3ya, endDate: date })
            }
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalUpdateJam3ya;
