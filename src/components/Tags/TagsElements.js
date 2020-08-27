import React from "react";
import TagsElement from "./TagsElement/TagsElement";
import Aux from "../../hoc/Aux";

const tagsElements = (props) => (
  <Aux>
    <div className="main-grid-all-tags">
      <div className="tags-element-single-tag">
        <TagsElement />
      </div>
      <div className="tags-element-single-tag">
        <TagsElement />
      </div>
      <div className="tags-element-single-tag">
        <TagsElement />
      </div>
      <div className="tags-element-single-tag">
        <TagsElement />
      </div>
    </div>
  </Aux>
);

export default tagsElements;
