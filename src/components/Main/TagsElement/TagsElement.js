import React from "react";
import Aux from "../../../hoc/Aux";

const tagsElement = (props) => {
  const { title } = props.info;

  return <Aux>{title}</Aux>;
};

export default tagsElement;
