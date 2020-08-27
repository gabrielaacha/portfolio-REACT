import React from "react";
import NavigationElementMenuItem from "./NavigationElementMenuItems/NavigationElementMenuItem";

const NavigationElementMenu = (props) => {
  return (
    <ul className="nav-element__menu__all">
      <NavigationElementMenuItem />
      <NavigationElementMenuItem />
      <NavigationElementMenuItem />
      <NavigationElementMenuItem />
    </ul>
  );
};

export default NavigationElementMenu;
