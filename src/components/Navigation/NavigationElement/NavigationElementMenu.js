import React from "react";
// import NavigationElementMenuItem from "./NavigationElementMenuItems/NavigationElementMenuItem";
import Aux from "../../../hoc/Aux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Projects from "../../Pages/Projects";
import Tags from "../../Pages/Tags";

const NavigationElementMenu = ({ data }) => {
  // const menuItems = data.map((menuItem, i) => {
  //   return <NavigationElementMenuItem key={i} info={menuItem} />;
  // });

  return (
    <Aux>
      {/* -----------responsive menu--------------- */}
      <div className="header">
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>

        {/* ------------routing-------------------- */}
        <div className="nav-element__container">
          <Router>
            <ul className="nav-element__menu__all menu">
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

            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Projects" component={Projects}></Route>
              <Route path="/Tags" component={Tags}></Route>
              <Route path="/Contact" component={Contact}></Route>
            </Switch>
          </Router>
        </div>
      </div>
    </Aux>
  );
};

export default NavigationElementMenu;
