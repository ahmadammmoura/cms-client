import React from "react";

import { Form } from "react-bootstrap";

function ComplaintForm({HandelChange}) {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="subject" name="subject" onChange={HandelChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>is Urgent</Form.Label>
        <Form.Select aria-label="Default select example" name="isUrgent" onChange={HandelChange}>
          <option>choose</option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" onChange={HandelChange} />
      </Form.Group>
    </Form>
  );
}

export default ComplaintForm;
