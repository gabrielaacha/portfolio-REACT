import React from "react";

const NavigationElementMenuItem = (props) => {
  const { title } = props.info;

  return <li className="nav-element__menu__single-items">{title}</li>;
};

export default NavigationElementMenuItem;
