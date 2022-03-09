import React from "react";
import style from "./style/sideNav.module.css";

import logo from "../../assets/logo.png";
function SideNave() {
  

  return (
    <div className={style.sideNav}>
      <img src={logo} alt="" />

      <div className={style.buttunsContainer}>
        <button className={style.buttun}>Customers</button>
        <button className={style.buttun}>Complaints</button>
        <button className={style.buttun}>Chart</button>
      </div>
      <button className={style.buttun}>Log out</button>
    </div>
  );
}

export default SideNave;
