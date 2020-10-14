import React, { useState } from "react";
import CreateArticleForm from "./CreateArticlesForm";
import { Button } from "semantic-ui-react";

const MyPage = () => {
  const [createForm, setCreateForm] = useState(false);

  return (
    <div>
      {createForm ? (
        <CreateArticleForm />
      ) : (
        <Button
          data-cy="create-article"
          id="save-result"
          onClick={() => setCreateForm(true)}
        >
          Create Article
        </Button>
      )}
    </div>
  );
};

export default MyPage;
