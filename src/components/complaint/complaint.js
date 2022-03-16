import React, { useEffect,useState } from "react";
import style from "./complaint.module.css";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchComplaint } from "../../store/actions/index";
import AdminModal from "../model/AdminModal";
import axios from '../../APIs/Axios'
import {config} from '../auth/config'

function Complaint() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [complaint,setComplaint] = useState({});
  const handleClose = () => setShow(false);
  useEffect(() => {
    dispatch(fetchComplaint());
  }, [dispatch]);

  const customers = useSelector((state) => state.customerReducer.customers);
  const handleShow = (id,username) => {
    setShow(true);
    
    setComplaint({id,username});

    
  }
  const HandelChange = (e) => setComplaint({ ...complaint, [e.target.name]: e.target.value });
 

  const handleSubmit = async (e) => {
    const response = await axios.put("/admin/complaint", complaint, config);
    console.log(response)
    handleClose();
  };

  return (
    <div className={style.complaintContainer}>
      {customers.length
        ? customers.map((card) => {
            return (
              <Card
                onClick={()=>handleShow(card._id,card.username)}
                className={style.cards}
                key={card.id}
                border={`${card.isUrgent ? "danger" : "primary"}`}
                style={{
                  width: "30%",
                  margin: "1rem 1rem 1rem 1rem",
                  height: "30vh",
                }}
              >
                <Card.Header>{`${
                  card.isUrgent ? "Urgent" : "not Urgent"
                }`}</Card.Header>
                <Card.Header>{`Email : ${card.username}`}</Card.Header>

                <Card.Body>
                  <Card.Title>{card.subject}</Card.Title>
                  <Card.Text>{card.message}</Card.Text>
                </Card.Body>
              </Card>
            );
          })
        : null}

      <AdminModal complaint={complaint} show={show} handleSubmit={handleSubmit} HandelChange={HandelChange} handleClose={handleClose}/>
    </div>
  );
}

export default Complaint;
