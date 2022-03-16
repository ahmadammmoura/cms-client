import React, { useState, useEffect } from "react";
import style from "./style/signup.module.css";

import axios from "../../APIs/Axios";
import parseJwt from "./jwt";
import { useHistory } from "react-router-dom";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";

import { HandleUser } from "../../store/actions/index";

function SignUp({ setHaveAcount }) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  const HandelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handelIsAdmin = (e) => {
    if (e.target.checked) {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: "customer" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/signup", user);
    cookie.save("token", response.data.token);

    const obj = await parseJwt(response.data.token);

    dispatch(HandleUser(obj));

    obj.role === "admin" ? history.push("/admin") : history.push("/customer");
  };

  return (
    <div className={style.container}>
      <h3>User Registration</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="checkbox"
            id="IsAdmin"
            name="role"
            value="admin"
            onChange={handelIsAdmin}
          />
          <label htmlFor="IsAdmin"> i am an admin</label>
        </div>

        <input
          type="text"
          placeholder="FULL NAME"
          name="fullName"
          onChange={HandelChange}
        />
        <input
          type="username"
          placeholder="USERNAME"
          name="username"
          onChange={HandelChange}
        />
        <input
          type="password"
          placeholder="PASSWORD"
          name="password"
          onChange={HandelChange}
        />
        {user.role === "admin" ? (
          <input
            type="password"
            placeholder="let another admin give you the key"
            name="key"
            onChange={HandelChange}
          />
        ) : null}
        <input type="submit" />
      </form>

      <p onClick={() => setHaveAcount(true)}>already have acount</p>
    </div>
  );
}

export default SignUp;
