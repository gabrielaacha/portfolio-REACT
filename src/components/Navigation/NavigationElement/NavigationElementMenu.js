import React from "react"; // import NavigationElementMenuItem from "./NavigationElementMenuItems/NavigationElementMenuItem";
//---------------Aux---------------------------------
import Aux from "../../../hoc/Aux";
//---------------routing---------------------------------
import { Link } from "react-router-dom";
//---------------pages---------------------------------
// import About from "../../Pages/About";
// import Contact from "../../Pages/Contact";
// import Projects from "../../Pages/Projects";
// import Categories from "../../Pages/Categories";
//---------------components---------------------------------
// import Summary from "../../Summary/Summary";
// import MainGridElements from "../../Main/MainGridElements";
// import TagsElements from "../../Tags/TagsElements";

const NavigationElementMenu = (props) => {
  return (
    <Aux>
      <div></div>
      {/* -----------responsive menu--------------- */}
      <div className="header">
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>

        {/* ------------routing-------------------- */}
        <div className="nav-element__container">
          <ul className="nav-element__menu__all menu">
            <li className="nav-element__menu__single-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-element__menu__single-items">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-element__menu__single-items">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className="nav-element__menu__single-items">
              <Link to="/Tags">Tags</Link>
            </li>
            <li className="nav-element__menu__single-items">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Aux>
  );
};

export default NavigationElementMenu;
