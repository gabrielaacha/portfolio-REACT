import React from "react";
import TagsElement from "../Main/TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const tagsElements = (props) => {
  const itemsTags = props.data.map((itemTags1, i) => {
    return <TagsElement key={i} info={itemTags1} />;
  });

  return (
    <Aux>
      <div className="tags__all">{itemsTags}</div>
    </Aux>
  );
};

export default tagsElements;
