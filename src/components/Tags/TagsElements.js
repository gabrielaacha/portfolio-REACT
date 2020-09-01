import React from "react";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const tagsElements = (props) => {
  return (
    <Aux>
      <div className="tags__all">
        <div className="tags__single">
          <TagsElement />
          <TagsElement />
          <TagsElement />
          <TagsElement />
          <TagsElement />
          <TagsElement />
        </div>
      </div>
    </Aux>
  );
};

export default tagsElements;
