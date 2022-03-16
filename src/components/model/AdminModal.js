import React from "react";
import { Modal, Button,Form } from "react-bootstrap";
function AdminModal({ show, handleClose,HandelChange,handleSubmit }) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>edit complaint</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>action</Form.Label>
        <Form.Select aria-label="Default select example" name="Status" onChange={HandelChange}>
          <option value="pending resolution">pending resolution</option>
          <option value="resolved">resolved</option>
          <option value="dismissed">dismissed</option>
        </Form.Select>
      </Form.Group>
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

export default AdminModal;
