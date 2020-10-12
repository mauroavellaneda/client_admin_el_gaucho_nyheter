import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";

const CreateArticlesForm = () => {
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    let result;
    try { 
      result = await axios.post(
        "/journalist/articles",
        {
          article: {
            title: e.target.title.value,
            lead: e.target.lead.value,
            content: e.target.content.value,
            category: selectedCategory,
          },
        },
        {
          headers: {
            ...headers,
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      ); 
      setMessage(result.data.message);
      document.getElementById("create-article").reset();
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  return (
    <div>
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
        </Form.Group>
        <Form.TextArea
          label="Article"
          placeholder="..."
          data-cy="content"
          id="content"
        />
        <Form.Button data-cy="save-article">Save Article</Form.Button>
      </Form>
      <p data-cy="save-article-message">{message}</p>
    </div>
  );
};

const options = [
  { key: "m", text: "News", value: "news" },
  { key: "f", text: "Sports", value: "sports" },
  { key: "o", text: "Politics", value: "politics" },
];

export default CreateArticlesForm;
