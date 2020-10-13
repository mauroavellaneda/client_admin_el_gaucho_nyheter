import React, { useState } from "react";
import { Form, Container } from "semantic-ui-react";
import Article from "../modules/createForm";

const CreateArticlesForm = () => {
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await Article.createForm(
      e.target.title.value,
      e.target.lead.value,
      e.target.content.value,
      selectedCategory
    );
    setMessage(result);
  };

  return (
      <Container>
      <Form data-cy="create-article" id="create-article" onSubmit={onSubmit}>
        <Form.Group widths="equal" data-cy="form-article">
          <Form.Input
            fluid
            label="Title"
            placeholder="Title"
            id="title"
            data-cy="title"
          />
          <Form.Input
            fluid
            label="Lead"
            placeholder="Lead"
            data-cy="lead"
            id="lead"
          />
          <Form.Select
            fluid
            label="Category"
            options={options}
            onChange={(e, data) => {
              handleCategoryChange(data.value);
            }}
            placeholder="Gender"
            data-cy="category"
            id="category"
          />   
          <Form.TextArea
            label="Article"
            placeholder="..."
            data-cy="content"
            id="content"
          />
        </Form.Group>
        <Form.Button data-cy="save-article">Save Article</Form.Button>
      </Form>
      <p data-cy="save-article-message">{message}</p>
      </Container>
  );
};

const options = [
  { key: "m", text: "News", value: "news" },
  { key: "f", text: "Sports", value: "sports" },
  { key: "o", text: "Politics", value: "politics" },
];

export default CreateArticlesForm;
