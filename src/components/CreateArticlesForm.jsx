import React, { useState } from "react";
import { Form, Container } from "semantic-ui-react";
import Article from "../modules/articles";

const CreateArticlesForm = () => {
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const selectImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let { title, lead, content, encodedImage } = e.target;

    if (image) {
      encodedImage = await toBase64(image);
    }

    const response = await Article.create(title, lead, content, encodedImage);
    setMessage(response);
  };
  return (
    <Container>
      <Form data-cy="create-article" id="create-article" onSubmit={onSubmit}>
        <Form.Group widths="equal" data-cy="form-article">
          <Form.Input fluid label="Title" placeholder="Title" data-cy="title" />
          <Form.Input fluid label="Lead" placeholder="Lead" data-cy="lead" />
          <Form.Select
            fluid
            label="Category"
            options={options}
            onChange={(data) => {
              handleCategoryChange(data.value);
            }}
            placeholder="category"
            data-cy="category"
          />
          <Form.TextArea label="Article" placeholder="..." data-cy="content" />
          <Form.Input
            onChange={selectImage}
            fluid
            label="image"
            placeholder="image"
            data-cy="image-upload"
            type="file"
          />
        </Form.Group>
        <Form.Button data-cy="save-article">Save Article</Form.Button>
      </Form>
      {image && <img src={URL.createObjectURL(image)} />}
      {message && <p data-cy="save-article-message">{message}</p>}
    </Container>
  );
};

const options = [
  { key: "m", text: "News", value: "news" },
  { key: "f", text: "Sports", value: "sports" },
  { key: "o", text: "Politics", value: "politics" },
];

export default CreateArticlesForm;
