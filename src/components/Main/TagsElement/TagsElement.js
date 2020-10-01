import React from "react";
import Aux from "../../../hoc/Aux";

const tagsElement = (props) => {
  const { title } = props.info;

  return (
    <Aux>
      <div>{title}</div>
    </Aux>
  );
};

export default tagsElement;
