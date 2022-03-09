import React from 'react'
import ComplaintForm from '../components/form/Form'
import style from './style/customer.module.css'
function CustomerPage() {
  return (
    <div className={style.container}>
        <div className={style.form} >
            <h3>create an Complaint</h3>
            <ComplaintForm/>
        </div>
        <div className={style.compaint} >

        </div>
   </div>
  )
}

export default CustomerPage