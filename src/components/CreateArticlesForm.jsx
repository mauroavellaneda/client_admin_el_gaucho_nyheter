import React from "react";
import { Button, Form } from "semantic-ui-react";

const CreateArticlesForm = (props) => {
  return (
    <div>
      <Form data-cy="form-article" onSubmit={props.form}>
        <Form.Input
          placeholder="title"
          name="email"
          type="title"
          id="title"
          data-cy="title"
        />
      </Form>
    </div>
  );
};

export default CreateArticlesForm;
