import React, { useState } from "react";
import { Form, Container, Message, Checkbox } from "semantic-ui-react";
import Article from "../modules/articles";
import toBase64 from "../modules/toBase64";

const CreateArticlesForm = () => {
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState();

  const selectImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let { title, lead, content, encodedImage, premium} = e.target;
    if (image) {
      encodedImage = await toBase64(image);
    }
    const response = await Article.create(
      title,
      lead,
      content,
      encodedImage,
      selectedCategory,
      premium,
    );
    setMessage(response);
  };

  return (
    <Container>
      <Form data-cy="create-article" id="create-article" onSubmit={onSubmit}>
        <Form.Group widths="equal" data-cy="form-article">
          <Form.Input fluid label="Title" placeholder="Title" data-cy="title" name='title' />
          <Form.Input fluid label="Lead" placeholder="Lead" data-cy="lead" name='lead'/>
          <Form.Select
            fluid
            label="Category"
            options={options}
            onChange={(e, data) => {
              handleCategoryChange(data.value);
            }}
            data-cy="category"
          />
          <Form.Field>
            {" "}
            <Checkbox
              toggle
              data-cy="premium"
              label="premium"
              id="premium"
              name='premium'
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal" data-cy="form-article">
          <Form.TextArea
            label="Article"
            placeholder="Content"
            data-cy="content"
            name='content'
          />
          <Form.Input
            onChange={selectImage}
            fluid
            label="Image"
            data-cy="image-upload"
            type="file"
          />
        </Form.Group>
        <Form.Button data-cy="save-article" color="blue" floated="right">
          Save Article
        </Form.Button>
      </Form>
      {image && <img src={URL.createObjectURL(image)} alt="preview" />}
      {message && (
        <Message data-cy="save-article-message" color="purple">
          {message}
        </Message>
      )}
    </Container>
  );
};

const options = [
  { key: "m", text: "News", value: "news" },
  { key: "f", text: "Sports", value: "sports" },
  { key: "o", text: "Politics", value: "politics" },
];

export default CreateArticlesForm;
