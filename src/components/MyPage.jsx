import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CreateArticleForm from "./CreateArticlesForm"

const MyPage = () => {
  const { role } = useParams();
  const [createForm, setCreateForm] = useState(false)

  let display;
  if (role === "journalist") {
    display = <button data-cy="create-article">Create Article</button>;
  } else if (role === "no_match") {
    display = "No Match";
  }

  return (
    <div>
      <p>{display}</p>
    </div>
  );
};

export default MyPage;
