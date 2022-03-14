import React, { useEffect, useState } from "react";
import { Table, Dropdown, Button } from "react-bootstrap";
import style from "./style/customerTable.module.css";
import cookie from "react-cookies";
import axios from "../../APIs/Axios";
import CustomerModel from "../model/model";


function CustomerTable() {
  const [show, setShow] = useState(false);
  const [complaint, setComplaint] = useState({});
  const [allComplaint, setAllComplaint] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HandelChange = (e) => setComplaint({ ...complaint, [e.target.name]: e.target.value });
 

  const handleSubmit = async (e) => {
    const token = cookie.load("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.post("/customer/complaint", complaint, config);

    handleClose();
  };

  useEffect(() => {
    fetchComplaint();
  }, []);

  const fetchComplaint = async () => {
    const token = cookie.load("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.get("/customer/complaint", config);

    console.log(response.data)
    setAllComplaint(response.data);
    console.log(allComplaint)

    
  };
  return (
    <div className={style.tableContainer}>
      <div className={style.filterContainer}>
        <Dropdown className={style.dropdown}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            filter complaint by
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">resolved</Dropdown.Item>
            <Dropdown.Item href="#/action-2">pending resolution</Dropdown.Item>
            <Dropdown.Item href="#/action-3">dismissed</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" onClick={handleShow}>
          create complaint
        </Button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>isUrgent</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          {allComplaint.map((item,index) => {
            return(<tr>
              <td>{index +1}</td>
              <td>{item.subject}</td>
              <td>{item.isUrgent ? "true" : "false"}</td>
              <td>{item.Status}</td>
            </tr>);
          })}
        </tbody>
      </Table>
      <CustomerModel
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        HandelChange={HandelChange}
        show={show}
      />
    </div>
  );
}

export default CustomerTable;
