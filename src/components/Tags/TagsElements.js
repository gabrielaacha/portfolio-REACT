import React from "react";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const tagsElements = (props) => (
  <Aux>
    <div className="tags__all">
      <div className="tags__single">
        <TagsElement />
      </div>
      <div className="tags__single">
        <TagsElement />
      </div>
      <div className="tags__single">
        <TagsElement />
      </div>
      <div className="tags__single">
        <TagsElement />
      </div>
    </div>
  </Aux>
);

export default tagsElements;
