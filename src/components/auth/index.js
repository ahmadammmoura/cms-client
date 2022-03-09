import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function LogInContainer() {
  const [haveAcount, setHaveAcount] = useState(false);

  return (
    <>
      {!haveAcount ? (
        <SignUp setHaveAcount={setHaveAcount} />
      ) : (
        <SignIn setHaveAcount={setHaveAcount} />
      )}
    </>
  );
}

export default LogInContainer;
