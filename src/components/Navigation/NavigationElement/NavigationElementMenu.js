import React from "react";
import NavigationElementMenuItem from "./NavigationElementMenuItems/NavigationElementMenuItem";

const NavigationElementMenu = (props) => {
  return (
    <div className="">
      {" "}
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul className="nav-element__menu__all">
              <NavigationElementMenuItem />
              <NavigationElementMenuItem />
              <NavigationElementMenuItem />
              <NavigationElementMenuItem />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationElementMenu;
