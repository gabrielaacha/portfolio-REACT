import React from "react";
import TagsElement from "../Main/TagsElement/TagsElement";
import Aux from "../../hoc/Aux";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import MainGridElements from "../Main/MainGridElements";
// import Data from "../../data/data.json";

const tagsElements = (props) => {
  const itemsTags = props.data.map((itemTags1, i) => {
    return <TagsElement key={i} info={itemTags1} />;
  });
  // const { title } = props.info;
  console.log(itemsTags);

  return (
    <Aux>
      <div className="tags__all">{itemsTags}</div>
      {/* <MainGridElements
        className="main-grid-elements_cards"
        data={props.data}
      ></MainGridElements> */}
    </Aux>
  );
};

export default tagsElements;
