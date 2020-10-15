import React from "react";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <h1 data-cy="header">El Gaucho Admin</h1>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
