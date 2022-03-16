import cookie from "react-cookies";

const token = cookie.load("token");

export const config = {
  headers: { Authorization: `Bearer ${token}` },
};

