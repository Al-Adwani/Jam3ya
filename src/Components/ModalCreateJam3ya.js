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
        <Modal.Header>
          <div>
            <form className="createJam" onSubmit={handleSubmit}>
              <h3 className="cmj">Add a New Jam3ya</h3>
              <br />
              title:
              <input
                className="form-control me-2"
                type="text"
                name="title"
                onChange={handleChange}
              />
              <br />
              image:
              <input
                className="form-control me-2"
                name="image"
                onChange={handleChange}
              />
              <br />
              amount:
              <input
                className="form-control me-2"
                name="amount"
                onChange={handleChange}
              />
              <br />
              limit:
              <input
                className="form-control me-2"
                name="limit"
                onChange={handleChange}
              />
              <br />
              startDate:
              <DatePicker
                className="form-control me-2"
                selected={createJam3ya.startDate}
                onChange={(date) =>
                  setCreateJam3ya({ ...createJam3ya, startDate: date })
                }
              />
              <br />
              endDate:
              <DatePicker
                className="form-control me-2"
                selected={createJam3ya.endDate}
                onChange={(date) =>
                  setCreateJam3ya({ ...createJam3ya, endDate: date })
                }
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default ModalCreateJam3ya;
