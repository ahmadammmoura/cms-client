import React from 'react'
import SideNav from '../components/sideNav';
import style from './style/dashBoard.module.css';


function Dashboard() {
  return (
    <div className={style.container}>
        
        <SideNav/>

        <div></div>
        <div></div>
    </div>
  )
}

export default Dashboard