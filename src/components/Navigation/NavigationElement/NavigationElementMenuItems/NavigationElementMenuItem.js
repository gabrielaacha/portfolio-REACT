import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aux from "../../../../hoc/Aux";
import About from "../../../Pages/About";
import Contact from "../../../Pages/Contact";
import Projects from "../../../Pages/Projects";
import Tags from "../../../Pages/Tags";

const NavigationElementMenuItem = (props) => {
  const { title } = props.info;

  return (
    <Aux>
      {" "}
      {/* <Router> */}{" "}
      <li className="nav-element__menu__single-items">
        <Link>{title}</Link>
        {/* <Link>About</Link> */}
      </li>
      <Switch>
        <Route path={`/${title}`}>
          {" "}
          <About />
        </Route>
        {/* <Route path={`/About`}>
            {" "}
            <About />
          </Route> */}
      </Switch>
      {/* </Router> */}
    </Aux>
  );
};

export default NavigationElementMenuItem;
