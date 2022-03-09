import React, { useState } from "react";
import style from "./Style/form.module.css";
import cookie from "react-cookies";

import axios from "../../APIs/Axios";
function Form() {
  const [complaint, setComplaint] = useState({});

  const HandelChange = (e) => {
    setComplaint({ ...complaint, [e.target.name]: e.target.value });
    console.log(complaint);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = cookie.load("token");
    
    const response = await axios.post("/signup", {...complaint,token:token});

  };

  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="subject"
        name="subject"
        onChange={HandelChange}
      />
      <select name="isUrgent" onChange={HandelChange}>
        <option value="0">its urgent</option>
        <option value="true">yes</option>
        <option value="false">no</option>
      </select>
      <textarea cols="30" rows="10" name="message" onChange={HandelChange} />

      <input type="submit" />
    </form>
  );
}

export default Form;
