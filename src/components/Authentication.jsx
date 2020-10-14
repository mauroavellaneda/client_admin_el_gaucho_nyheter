import React from "react";
import LoginForm from "./LoginForm";
import auth from "../modules/auth";

const Authentication = (props) => {
  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await auth.signIn(email, password);

    if (response.success) {
      debugger;
      props.authenticate(response.success);
      props.setRole(response.data.role);
    } else {
      debugger;
    }
  };

  return (
    <>
      <LoginForm login={login} />
    </>
  );
};

export default Authentication;
