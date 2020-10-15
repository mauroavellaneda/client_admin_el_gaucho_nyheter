import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Message } from "semantic-ui-react";
import { useSelector } from "react-redux";

const Authentication = (props) => {
  const message = useSelector((state) => state.message);

  return (
    <>
      <LoginForm />
      {message && (
        <Message negative data-cy="message">
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
    </>
  );
};

export default Authentication;
