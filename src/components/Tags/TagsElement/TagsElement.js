import React from "react";

const tagsElement = (props) => {
  const { title } = props.info;

  return <div className="tags__single">{title}</div>;
};

export default tagsElement;
