import React, { Component } from "react";
//------------components------------------------------
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
  }

  render() {
    console.log(this.state.data, "filtered", this.state.filteredData);
    console.log(this.state.dataMenu);

    return (
      <Aux>
        {/* ---------other components--------------- */}
        <Router>
          <NavigationElements data={this.state.dataMenu} />
          <Switch>
            {/* <div className="summary">
          <Summary />
        </div>
       
        
        <div className="tags">
          <TagsElements data={this.state.dataTags} />
        </div>
        
        
        <MainGridElements
          className="main-grid-elements_cards"
          data={this.state.data}
        /> */}
            {/* <Route path="/" exact component={} /> */}
            <Route path="/About" component={Summary} />
            <Route path="/Projects" component={TagsElements} />
            <Route path="/Tags" component={MainGridElements} />
          </Switch>
        </Router>
      </Aux>
    );
  }
}
