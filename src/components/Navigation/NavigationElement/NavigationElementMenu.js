import React from "react";
import NavigationElementMenuItem from "./NavigationElementMenuItems/NavigationElementMenuItem";
import Aux from "../../../hoc/Aux";

const NavigationElementMenu = (props) => {
  const menuItems = props.data.map((menuItem, i) => {
    return <NavigationElementMenuItem key={i} info={menuItem} />;
  });

  return (
    <Aux>
      <div className="">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul className="nav-element__menu__all">{menuItems}</ul>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default NavigationElementMenu;
