import React, { useEffect } from "react";
import style from "./style/dashBoard.module.css";
import Header from "../components/header/header";
import Counters from "../components/counters";
import Complaint from "../components/complaint/complaint";
import { useDispatch,useSelector } from "react-redux";
import { fetchComplaint } from "../store/actions";
function Dashboard() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchComplaint())
  },[])


  const customers = useSelector((state) => state.customerReducer.customers);
  console.log(customers)
  


  return (
    <>
      <Header />
      <Counters />
      <Complaint/>
    </>
  );
}

export default Dashboard;
