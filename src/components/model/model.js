import React from "react";
import { Modal, Button } from "react-bootstrap";
import ComplaintForm from "../form/Form";


function CustomerModel({ show, handleClose,HandelChange,handleSubmit }) {
  
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ComplaintForm HandelChange={HandelChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CustomerModel;
