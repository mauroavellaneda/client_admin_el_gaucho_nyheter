import React from "react";
import Authentication from "./components/Authentication";
import MyPage from "./components/MyPage";
import Header from "./components/Header";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const authenticated = useSelector((state) => state.authenticate);
  const role = useSelector((state) => state.currentUser.role);

  let display;

  if (authenticated && role === "journalist") {
    display = <Redirect to="/journalist" />;
  }

  return (
    <>
      <Header />
      {display}
      {authenticated && role === "journalist" ? (
        <Route exact path="/:role" component={MyPage} />
      ) : (
        <Authentication />
      )}
    </>
  );
};

export default App;
