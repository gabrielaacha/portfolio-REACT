import React from "react";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const tagsElements = (props) => {
  const itemsTags = props.data.map((itemTags, i) => {
    return <TagsElement key={i} info={itemTags} />;
  });

  return (
    <Aux>
      <div className="tags__all">{itemsTags}</div>
    </Aux>
  );
};

export default tagsElements;
