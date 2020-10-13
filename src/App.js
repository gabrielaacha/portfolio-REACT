import React, { Component } from "react";
//------------components------------------------------
import HomeElements from "./components/Home/HomeElement";
import MainGridElements from "./components/Main/MainGridElements";
import Summary from "./components/Summary/Summary";
import TagsElements from "./components/Tags/TagsElements";
import NavigationElements from "./components/Navigation/NavigationElements";
//---------------routing---------------------------------
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//------------data------------------------------
import Menu from "./data/menu.json";
import Tags from "./data/tags.json";
import Data from "./data/data.json";
//------------Aux------------------------------
import Aux from "./hoc/Aux";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      dataMenu: Menu,
      dataTags: Tags,
    };
    console.log(React.Component);
  }

  render() {
    return (
      <Aux>
        <Router>
          <NavigationElements data={this.state.dataMenu} />
          {/* ---------other components--------------- */}
          <Switch>
            <Route path="/" exact component={HomeElements} />
            <Route path="/About" component={Summary} />
            <Route path="/Projects">
              <MainGridElements
                className="main-grid-elements_cards"
                data={this.state.data}
                dataTags={this.state.dataTags}
              />
            </Route>
            <Route path="/Tags">
              <TagsElements data={this.state.dataTags} />
            </Route>
          </Switch>
        </Router>
      </Aux>
    );
  }
}
