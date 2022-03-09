import React, { useEffect, useState } from "react";
import style from "./style/signup.module.css";
import axios from "../../APIs/Axios";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import parseJwt from "./jwt";

function SignIn({ setHaveAcount }) {

  const [user, setUser] = useState({});
    const history = useHistory()


  useEffect(()=>{
      return ()=>{
          console.log("unmount")
      }
  },[])

  const HandelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user)
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/signin", {},{auth:user});
    
    cookie.save("token", response.data);

    const obj = await parseJwt(response.data);

    
    obj.role === "admin" ? history.push("/admin") : history.push("/customer");

    };
  return (
    <div className={style.container}>
      <h3>User Registration</h3>

      <form onSubmit={handleSubmit}>
        <input type="username" placeholder="USERNAME" name="username" onChange={HandelChange} />
        <input type="password" placeholder="PASSWORD" name="password" onChange={HandelChange} />
        <input type="submit" placeholder="FULL NAME" />
      </form>

      <p onClick={() => setHaveAcount(false)}>sign up</p>
    </div>
  );
}

export default SignIn;