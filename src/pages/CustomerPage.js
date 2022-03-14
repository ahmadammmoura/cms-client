import React from "react";
import style from "./style/customer.module.css";

import Header from "../components/header/header";
import CustomerTable from "../components/tables/customerTable";

function CustomerPage() {
  return (
    <div className={style.container}>
      <Header />

      <CustomerTable />
    </div>
  );
}

export default CustomerPage;
