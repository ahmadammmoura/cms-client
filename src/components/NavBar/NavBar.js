import React from "react";
import style from "./style/NavBar.module.css";
import logo from '../../assets/logo.png'
function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.logo}>
          <img src={logo} alt="logo"/>
        </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Page</li>
        <li>Portfolio</li>
      </ul>

      <div className={style.BTN}>
        <button>SIGN IN</button>
      </div>
    </div>
  );
}

export default NavBar;
