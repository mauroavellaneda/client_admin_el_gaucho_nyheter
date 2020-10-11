import React, { useState } from "react";
import Authentication from "./components/Authentication";
import MyPage from "./components/MyPage";
import Header from "./components/Header";
import { Route, Redirect, Switch } from "react-router-dom";

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
      <Switch>
        {authenticated ? (
          <Route exact path="/:role" component={MyPage} />
        ) : (
          <Authentication
            authenticate={(success) => setAuthenticated(success)}
          />
        )}
      </Switch>
      {/* <Redirect from="/" to="/auth" /> */}

      {/* <Switch>

        <Route path="/auth">
          <Authentication
            authenticate={(success) => setAuthenticated(success)}
          />
        </Route>

        <Route exact path="/:journalist" component={MyPage} />
        <Route exact path="/:editor" component={MyPage} />
      </Switch> */}
    </>
  );
};

export default App;
