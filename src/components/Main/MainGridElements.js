import React from "react";
import MainGridElementCard from "./MainGridElement/MainGridElementCard";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const mainGridElements = (props) => {
  const items = props.data.map((item, i) => {
    return <MainGridElementCard key={i} info={item} />;
  });

  const itemsTags = props.dataTags.map((itemTags1, i) => {
    return <TagsElement key={i} info={itemTags1} />;
  });

  return (
    <Aux>
      <div className="main-grid">
        <div className="tags__all">{itemsTags}</div>

        <div className="main-grid__all">
          <div className="main-grid__row">
            <div className="main-grid__col-1-of-3">{items}</div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default mainGridElements;
