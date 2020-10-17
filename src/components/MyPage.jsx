import React, { useState } from "react";
import CreateArticleForm from "./CreateArticlesForm";
import { Button, Container } from "semantic-ui-react";

const MyPage = () => {
  const [createForm, setCreateForm] = useState(false);

  return (
    <>
      {createForm ? (
        <CreateArticleForm />
      ) : (
        <Container>
          <Button
            color="blue"
            data-cy="create-article"
            id="save-result"
            onClick={() => setCreateForm(true)}
          >
            Create Article
          </Button>
        </Container>
      )}
    </>
  );
};

export default MyPage;
