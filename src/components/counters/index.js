import React, { } from "react";
import { useSelector } from "react-redux";
import style from "./counter.module.css";
import { VictoryPie } from "victory-pie";



function Counters() {

  const customers = useSelector((state) => state.customerReducer.customers);

  const panding = customers.filter(item => item.Status === "pending resolution")
  const dismissed = customers.filter(item => item.Status === "dismissed")
  const resolved = customers.filter(item => item.Status === "resolved")




  const myData = [
    { x: `panding (${panding.length}) `, y: panding.length },
    { x: `dismissed (${dismissed.length})`, y: dismissed.length },
    { x: `dismissed (${resolved.length})`, y: resolved.length },
  ];

  return (
    <div className={style.VictoryPie}>
      <VictoryPie
        
        data={myData}
        colorScale={["#FDD477", "red", "green"]}
        radius={100}
      />
    </div>
  );
}

export default Counters;
