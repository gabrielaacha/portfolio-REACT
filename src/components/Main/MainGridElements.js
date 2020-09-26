import React from "react";
import MainGridElementCard from "./MainGridElement/MainGridElementCard";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const mainGridElements = (props) => {
  const menu = props.dataTags.map((item, i) => {
    return <TagsElement key={i} info={item} />;
  });

  const itemsTags = props.dataTags.map((itemTags1, i) => {
    console.log(itemTags1.title);
    return itemTags1.title;
  });

  console.log(props.dataTags);
  console.log(props.data);

  const itemsTags2 = props.data.map((itemTags2, i) => {
    itemTags2.tags.map((item, i) => {
      console.log(item);
      return item;
    });
    return itemTags2;
  });

  const items = props.data.map((item, i) => {
    if (itemsTags === itemsTags2) {
      return <MainGridElementCard key={i} info={item} />;
    }
  });
  console.log(itemsTags);
  console.log(itemsTags2);

  return (
    <Aux>
      <div className="main-grid">
        <div className="tags__all">{menu}</div>
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
