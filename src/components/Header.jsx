import React from "react";
import { Menu } from "semantic-ui-react";
// import { useParams } from "react-router-dom";

const Header = () => {
  // const { role } = useParams();

  // let greeting;
  // if (role === "journalist") {
  //   greeting = "Hello editor";
  // } else if (role === "editor") {
  //   greeting = "Hello editor";
  // } else if (role === "no_match") {
  //   greeting = "No Match";
  // }

  return (
    <Menu inverted>
      <Menu.Item>
        <h1 data-cy="header">El Gaucho Admin</h1>
      </Menu.Item>
      {/* <Menu.Item>
        <p>{greeting}</p>
      </Menu.Item> */}
    </Menu>
  );
};

export default Header;
