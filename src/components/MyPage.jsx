import React from "react";
import { useParams } from "react-router-dom";

const MyPage = () => {
  const { role } = useParams();

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
