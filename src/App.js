import React, { Component } from "react";
import Data from "./data.json";
import MainGridElements from "./components/Main/MainGridElements";
import Summary from "./components/Summary/Summary";
import TagsElements from "./components/Tags/TagsElements";
import NavigationElements from "./components/Navigation/NavigationElements";
import Aux from "./hoc/Aux";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      filteredData: [],
    };
  }

  filteredDataHandler = () => {
    let filteredArr = [];
    const newArr = this.state.data.map((item) =>
      item.projectName ? console.log(item) : null
    );
    filteredArr.push(newArr);
    this.setState({
      filteredData: filteredArr,
    });
  };

  imageHandler = () => {
    let imageSel = [];
    const imageCards = this.state.data.map((item) => {
      return { item };
    });
    imageSel.push(imageCards);
  };

  render() {
    console.log(this.state.data, "filtered", this.state.filteredData);
    console.log(this.imageHandler.item);
    return (
      <Aux>
        <NavigationElements />
        <div className="summary">
          <Summary />
        </div>
        <div className="tags">
          <TagsElements />
        </div>
        <MainGridElements
          className="main-grid-elements_cards"
          data={this.state.data}
          filteredData={this.filteredDataHandler}
          cardUp={this.imageHandler}
        />
      </Aux>
    );
  }
}
