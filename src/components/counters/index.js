import React, { useState } from "react";
import style from "./counter.module.css";
import {
  BsFillCheckCircleFill,
  BsFillPauseCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { PieChart } from 'react-minimal-pie-chart';

import { useSelector } from "react-redux";

function Counters() {
  const [resolved, setResolved] = useState(0);
  const [pending, setPending] = useState(0);
  const [dismissed, setDismissed] = useState(0);
  const customers = useSelector((state) => state.customerReducer.customers);

  // customers.forEach((element) => {
  //   if (element.Status === "resolved") {
  //     setResolved(resolved + 1);
  //   } else if (element.Status === "pending resolution") {
  //     setPending(pending + 1);
  //   } else if (element.Status === "dismissed") {
  //     setDismissed(dismissed + 1);
  //   }

  //   console.log(element.Status);
  // });

  return (
    <div className={style.counters}>
      <div className={style.counter}>
        <div className={style.icons}>
          <BsFillCheckCircleFill size={50} color={"#198754"} />
          <h4>resolved</h4>
        </div>
        <div className={style.numbers}>
          <h1>{resolved}</h1>
        </div>
      </div>
      <div className={style.counter}>
        <div className={style.icons}>
          <BsFillPauseCircleFill size={50} color={"#f2d45c"} />
          <h4>pending</h4>
        </div>
        <div className={style.numbers}>
          <h1>{pending}</h1>
        </div>
      </div>
      <div className={style.counter}>
        <div className={style.icons}>
          <BsFillTrashFill size={50} color={"#BB2D3B"} />
          <h4>dismissed</h4>
        </div>
        <div className={style.numbers}>
          <h1>{dismissed}</h1>
        </div>
      </div>
    </div>
  );
}

export default Counters;
