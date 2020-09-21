import React from "react";
import NavigationElementMenuItem from "./NavigationElementMenuItems/NavigationElementMenuItem";
import Aux from "../../../hoc/Aux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Projects from "../../Pages/Projects";
import Tags from "../../Pages/Tags";

const NavigationElementMenu = ({ data }) => {
  const menuItems = data.map((menuItem, i) => {
    return <NavigationElementMenuItem key={i} info={menuItem} />;
  });

  return (
    <Aux>
      <div className="header">
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>

        <div className="nav-element__container">
          <Router>
            <ul className="nav-element__menu__all menu">{menuItems}</ul>
          </Router>
        </div>
      </div>
    </Aux>
  );
};

export default NavigationElementMenu;
