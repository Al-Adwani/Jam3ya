import React from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import jam3yaStore from "../Store/jam3yaStore";

function ModalCreateJam3ya() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createJam3ya, setCreateJam3ya] = useState({
    title: "",
    image: "",
    amount: "",
    limit: "",
    startDate: "",
    endDate: "",
  });
  const handleChange = (e) => {
    setCreateJam3ya({ ...createJam3ya, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    jam3yaStore.createJam3ya(createJam3ya);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Jam3ya Form
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div>
            <form onSubmit={handleSubmit}>
              <br />
              title:
              <input type="text" name="title" onChange={handleChange} />
              <br />
              image:
              <input name="image" onChange={handleChange} />
              <br />
              amount:
              <input name="amount" onChange={handleChange} />
              <br />
              limit:
              <input name="limit" onChange={handleChange} />
              <br />
              startDate:
              <DatePicker
                selected={createJam3ya.startDate}
                onChange={(date) =>
                  setCreateJam3ya({ ...createJam3ya, startDate: date })
                }
              />
              <br />
              endDate:
              <DatePicker
                selected={createJam3ya.endDate}
                onChange={(date) =>
                  setCreateJam3ya({ ...createJam3ya, endDate: date })
                }
              />
              <button type="submit">Submit</button>
            </form>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}></Button>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ModalCreateJam3ya;
