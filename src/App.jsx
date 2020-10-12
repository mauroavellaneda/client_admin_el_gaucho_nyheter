import React, { useState } from "react";
import Authentication from "./components/Authentication";
import MyPage from "./components/MyPage";
import Header from "./components/Header";
import { Route, Redirect } from "react-router-dom";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState("");

  let display;

  if (authenticated && role === "journalist") {
    display = <Redirect to="/journalist" />;
  } else {
    display = <Redirect to="/no_match" />;
  }

  return (
    <>
      <Header />
      {display}
      {authenticated ? (
        <Route exact path="/:role" component={MyPage} />
      ) : (
        <Authentication
          authenticate={(success) => setAuthenticated(success)}
          setRole={(role) => setRole(role)}
        />
      )}
    </>
  );
};

export default App;
