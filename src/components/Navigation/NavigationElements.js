import React from "react";
import NavigationElementMenu from "./NavigationElement/NavigationElementMenu";
import NavigationElementTitle from "./NavigationElement/NavigationElementTitle";
import Aux from "../../hoc/Aux";

const navigationElements = (props) => {
  console.log(props.data);

  return (
    <Aux>
      <div className="nav-elements__all">
        <NavigationElementTitle />
        <NavigationElementMenu data={props.data} />
      </div>
    </Aux>
  );
};

export default navigationElements;
