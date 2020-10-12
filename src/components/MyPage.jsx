import React, { useState } from "react";
import CreateArticleForm from "./CreateArticlesForm";

const MyPage = () => {
  const [createForm, setCreateForm] = useState(false);

  return (
    <div>
      {createForm ? (
        <CreateArticleForm />
      ) : (
        <button
          data-cy="create-article"
          id="save-result"
          onClick={() => setCreateForm(true)}
        >
          Create Article
        </button>
      )}
    </div>
  );
};

export default MyPage;
