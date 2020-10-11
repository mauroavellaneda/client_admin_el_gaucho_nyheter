import React from "react";
import { Form } from "semantic-ui-react";

const CreateArticlesForm = (props) => {
  return (
    <div>
      <Form data-cy="create-article">
        <Form.Group widths="equal" data-cy="form-article" onSubmit={props.form}>
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            id="title"
            data-cy="title"
          />
          <Form.Input fluid label="Lead" placeholder="Lead" data-cy="lead" />
          <Form.Select
            fluid
            label="Category"
            options={options}
            placeholder="Gender"
            data-cy="category"
          />
        </Form.Group>
        <Form.TextArea label="Article" placeholder="..." data-cy="content" />
        <Form.Button data-cy="save-article">Save Article</Form.Button>
      </Form>
    </div>
  );
};

const options = [
  { key: "m", text: "News", value: "news" },
  { key: "f", text: "Sports", value: "sports" },
  { key: "o", text: "Politics", value: "politics" },
];

export default CreateArticlesForm;
