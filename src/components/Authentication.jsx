import React, { useState } from "react";
import LoginForm from "./LoginForm";
import auth from "../modules/auth";

const Authentication = (props) => {
  const [message, setMessage] = useState();

  const login = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await auth.signIn(email, password);

      props.authenticate(response.success);
      props.setRole(response.data.role);
    } catch (error) {
      setMessage(error.response.data.errors[0]);
    }
  };

  return (
    <>
      <LoginForm login={login} />
      <p data-cy="message">{message}</p>
    </>
  );
};

export default Authentication;
