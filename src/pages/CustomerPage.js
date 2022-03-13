import React, { useEffect, useState } from 'react'
import ComplaintForm from '../components/form/Form'
import ComplaintCard from '../components/complaint/complaint'
import style from './style/customer.module.css'
import axios from '../APIs/Axios'
import cookie from "react-cookies";


function CustomerPage() {

  const [complaint , setComplaint] = useState([])

  useEffect(()=>{

    getGomplaint()
    
  },[])



  const getGomplaint = async()=>{
    const token = cookie.load("token");


    const config = {
      headers: { Authorization: `Bearer ${token}`}
    };


    const response = await axios.get('/customer/complaint',config)

    setComplaint(response.data)
  }


  return (
    <div className={style.container}>
        <div className={style.form} >
            <h3>create an Complaint</h3>
            <ComplaintForm/>
        </div>
        <div className={style.compaint} >
          {
            complaint.length ? complaint.map(card => <ComplaintCard /> ) : null 
          }
        </div>
   </div>
  )
}

export default CustomerPage