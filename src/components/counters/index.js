import React from 'react'
import style from './counter.module.css';
import { BsFillCheckCircleFill,BsFillPauseCircleFill,BsFillTrashFill } from "react-icons/bs";

function Counters() {
  return (
    <div className={style.counters}>
    <div className={style.counter}>
      <div className={style.icons}>
        <BsFillCheckCircleFill size={50} color={"#198754"}/>
        <h4>resolved</h4>
      </div>
      <div className={style.numbers} >
          <h1>20</h1>
      </div>
    </div>
    <div className={style.counter}>
      <div className={style.icons}>
        <BsFillPauseCircleFill size={50} color={"#f2d45c"}/>
        <h4>pending</h4>
      </div>
      <div className={style.numbers} >
          <h1>12</h1>
      </div>
    </div>
    <div className={style.counter}>
      <div className={style.icons}>
        <BsFillTrashFill size={50} color={"#BB2D3B"}/>
        <h4>dismissed</h4>
      </div>
      <div className={style.numbers} >
          <h1>5</h1>
      </div>
    </div>
  </div>
  )
}

export default Counters