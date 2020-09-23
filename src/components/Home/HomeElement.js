import React from "react";
import Aux from "../../hoc/Aux";

const mainGridElements = (props) => {
  const items = props.data.map((item, i) => {
    return <MainGridElementCard key={i} info={item} />;
  });

  return <Aux></Aux>;
};

export default mainGridElements;
